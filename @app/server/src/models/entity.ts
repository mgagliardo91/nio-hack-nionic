import { ClientBase } from 'pg'
import { camelToSnakeCase } from '../utils/format'
import { GraphQLScalarType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLBoolean, GraphQLID } from 'graphql';
import { pluralize, singularize } from 'graphile-build';
import { GraphQLSchema } from 'graphql';

export type FieldType = 'text' | 'serial' | 'integer' | 'boolean' | 'float' | 'timestamp'

export type EntitySchemaField = {
  name: string
  type: FieldType
  primaryKey?: boolean
  nullable?: boolean
  references?: {
    name: string
    field: string,
    manyToMany?: boolean
  }
}

export type EntitySchema = {
  name: string
  auditable?: boolean
  fields: EntitySchemaField[]
}

const idField: EntitySchemaField = {
  name: 'id',
  type: 'serial',
  primaryKey: true
}

export const getFieldTypeForScalar = (type: GraphQLScalarType, schema: GraphQLSchema): FieldType => {
  if (type === GraphQLString) {
    return 'text'
  } else if (type === GraphQLInt) {
    return 'integer'
  } else if (type === GraphQLID) {
    return 'serial'
  } else if (type === GraphQLFloat) {
    return 'float'
  } else if (type === GraphQLBoolean) {
    return 'boolean'
  } else if (type.name === 'Datetime') {
    return 'timestamp'
  } else {
    throw Error(`Unknown scalar type ${type.name}`)
  }
}

export const createEntity = async (schema: EntitySchema, pgClient: ClientBase) => {
  const entityName = camelToSnakeCase(schema.name);
  const pluralEntityName = pluralize(entityName);
  const fieldSql = [
    ...[idField, ...schema.fields]
    .filter((field) => !field.references?.manyToMany)
    .map((field) => ([
      field.references && camelToSnakeCase(field.name) == singularize(field.references?.name) ? `${singularize(field.references!.name)}_id` : camelToSnakeCase(field.name),
      field.type,
      field.primaryKey ? 'primary key' : '',
      (field.nullable && !field.primaryKey) == false ? 'not null' : '',
      field.references ? `references app_public.${field.references.name}(${field.references.field})` : ''
    ].filter((e) => e.length > 0).join(' '))),
    ...schema.auditable ? [
      'created_at timestamptz default now()',
      'updated_at timestamptz default now()'
    ]: []
  ]
  const manyToManyRels = schema.fields.filter((field) => field.references?.manyToMany).map((field) => {
    const singleRefName = singularize(field.references!.name)
    const singleEntityname = singularize(entityName)
    const linkerName = `${entityName}_${field.references!.name}`
    return `
      CREATE TABLE app_public.${linkerName} (
        ${singleEntityname}_id int constraint ${linkerName}_${singleEntityname}_id references app_public.${pluralEntityName} (id) on delete cascade,
        ${singleRefName}_${field.references!.field} int constraint ${linkerName}_${singleRefName}_${field.references!.field} references app_public.${field.references?.name} (${field.references!.field}) on delete cascade
      );
      COMMENT ON CONSTRAINT ${linkerName}_${singleEntityname}_id ON app_public.${linkerName} is E'@manyToManyFieldName ${pluralize(schema.name).toLowerCase()}';
      COMMENT ON CONSTRAINT ${linkerName}_${singleRefName}_${field.references!.field} ON app_public.${linkerName} is E'@manyToManyFieldName ${pluralize(field.name)}';
      COMMENT ON TABLE app_public.${linkerName} is E'@omit many';
      GRANT insert, select, update, delete on app_public.${linkerName} to "${process.env.DATABASE_VISITOR}";
    `;
  })
  const sql = `
    CREATE TABLE IF NOT EXISTS app_public.${pluralEntityName} (
      ${fieldSql.join(',\n')}
    );
    GRANT insert, select, update, delete on app_public.${pluralEntityName} to "${process.env.DATABASE_VISITOR}";
    ${schema.auditable ? `
    CREATE TRIGGER _${pluralEntityName}_set_updated_at
    BEFORE UPDATE ON app_public.${pluralEntityName}
    FOR EACH ROW EXECUTE PROCEDURE app_private.tg__timestamps();
    ` : ''}
    ${manyToManyRels.join('\n')}
  `;
  await pgClient.query(sql);
  return { [schema.name]: pluralEntityName };
}