import { buildSchema, parse, printSchema, isObjectType, GraphQLObjectType, isScalarType, ObjectTypeDefinitionNode} from 'graphql'
import { Extension } from './types';

export const processSchemas = async (extensions: Extension[]) => {
  const schema = parse(extensions.map(({ schema }) => schema).join('\n'));
  console.log(schema)
}