import { buildSchema, parse, printSchema, isObjectType, GraphQLObjectType, isScalarType, ObjectTypeDefinitionNode} from 'graphql'
import { ResolverWrapperFn, WrapperResolver } from './index.d'
import { hasDirective, unwrapType, getDirective, normalizeArguments, getTypeWrappers, TypeWrappers } from '../schema/utils/fields';
import { TypeDefinitionNode, BooleanValueNode } from 'graphql/language';
import { EntitySchemaField, getFieldTypeForScalar, createEntity } from '../../models/entity';
import { withTransaction } from '../../utils/db';
import { loadDynamic } from '../plugins/dynamicSchemaPlugin';

type EntityDirectveArgs = {
  auditable: BooleanValueNode
}

const orderEntities = (entities: GraphQLObjectType[]): GraphQLObjectType[] =>  {
  // need to order dependencies so that we create in order
  return entities
}

const createExtension: ResolverWrapperFn = async (
  resolve,
  source,
  args,
  context,
  resolveInfo: any,
) => {
  const { pgClient } = context
  const parsed = parse(args?.input.extension.schema);
  const oldSchema = printSchema(resolveInfo.schema)
  const schema = buildSchema(`
    ${oldSchema}
    ${args?.input.extension.schema}
  `)
  return await withTransaction(pgClient, async () => {
    const result = await resolve(source, args, context, resolveInfo)
    let createdAliases: {[key: string]: string} = {};
    for (let definition of parsed.definitions as TypeDefinitionNode[]) {
      if (!hasDirective(definition, 'entity')) {
        continue
      }
      const type = schema.getType(definition.name.value) as GraphQLObjectType
      const entityDirective = normalizeArguments(getDirective(type.astNode as TypeDefinitionNode, 'entity')!.arguments!) as EntityDirectveArgs;
      const fields: EntitySchemaField[] = []
      for (let field of Object.values(type.getFields())) {
        const unwrapped = unwrapType(field.type);
        const typeWrappers = getTypeWrappers(field.astNode).wrappers;
        if (isScalarType(unwrapped)) {
          if (typeWrappers[TypeWrappers.LIST_TYPE]) {
            throw new Error(`Cannot support list scalars for an entity`)
          }

          const type = getFieldTypeForScalar(unwrapped, resolveInfo.schema)
          fields.push({
            name: field.name,
            type,
            nullable: !typeWrappers[TypeWrappers.NON_NULL_NAMED_TYPE]
          });
        } else {
          const tableName = createdAliases[unwrapped.name] || resolveInfo.graphile.build.getNodeAlias(unwrapped.name)
          if (tableName) {
            fields.push({
              name: field.name,
              type: 'serial',
              nullable: !typeWrappers[TypeWrappers.NON_NULL_NAMED_TYPE],
              references: { 
                name: tableName,
                field: 'id',
                manyToMany: typeWrappers[TypeWrappers.LIST_TYPE]
              }
            });
          }
        }
      }
      createdAliases = {
        ...createdAliases,
        ...await createEntity({
          name: type.name,
          auditable: entityDirective.auditable?.value,
          fields
        }, pgClient)
      }
    }
    loadDynamic();
    return result;
  });
}


const wrapperResolver: WrapperResolver = {
  Mutation: {
    createExtension,
  },
}

export default wrapperResolver