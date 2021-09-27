import { isWrappingType, GraphQLObjectType, GraphQLScalarType } from 'graphql/type';
import { ArgumentNode, TypeDefinitionNode, Kind } from 'graphql'
import {
  DirectiveNode,
  FieldDefinitionNode,
  ObjectTypeDefinitionNode,
  ValueNode,
} from 'graphql/language'

type TypeWrapper = string

export type TypeWrapperMap = {
  [name: string]: boolean
}

export const TypeWrappers = {
  NAME: 'name',
  NON_NULL_NAMED_TYPE: 'isNonNullNamedType',
  LIST_TYPE: 'isListType',
  NON_NULL_LIST_TYPE: 'isNonNullListType',
}

const defaultWrappers: TypeWrapperMap = {
  [TypeWrappers.LIST_TYPE]: false,
  [TypeWrappers.NON_NULL_NAMED_TYPE]: false,
  [TypeWrappers.NON_NULL_LIST_TYPE]: false,
}

export const isOfKind = (
  typeDefinition: TypeDefinitionNode,
  ...kinds: string[]
): boolean => !!kinds.find((k) => k === typeDefinition.kind)

export const normalizeArguments = (
  args: readonly ArgumentNode[],
): { [name: string]: ValueNode } =>
  args.reduce<{ [name: string]: ValueNode }>((acc, arg) => {
    acc[arg.name.value] = arg.value
    return acc
  }, {})

export const getField = (
  typeDefinition: ObjectTypeDefinitionNode,
  fieldName: string,
): FieldDefinitionNode | undefined =>
  (typeDefinition.fields || []).find((d) => d.name.value === fieldName)

export const hasDirective = (
  typeDefinition: TypeDefinitionNode,
  directiveName: string,
): boolean => typeof getDirective(typeDefinition, directiveName) !== 'undefined';

export const getDirective = (
  typeDefinition: TypeDefinitionNode,
  directiveName: string,
): DirectiveNode | undefined =>
  (typeDefinition.directives || []).find((d) => d.name.value === directiveName)

export const withWrappers = (...wrappers: TypeWrapper[]): TypeWrapperMap =>
  (wrappers || []).reduce(
    (acc, wrapper) => ({ ...acc, [wrapper]: true }),
    defaultWrappers,
  )

type UnwrappedType = {
  type: GraphQLObjectType | GraphQLScalarType
  wrappers: TypeWrapperMap
}

export const unwrapType = (graphQLType: any): any => {
  if (isWrappingType(graphQLType)) {
    return unwrapType(graphQLType.ofType);
  }

  return graphQLType;
};

export const getTypeWrappers = (type: any, unwrappedType: any = {}) => {
  unwrappedType.wrappers = { ...defaultWrappers };

  const wrappedType = type.type;

  if (wrappedType) {
    unwrappedType = getTypeWrappers(
      wrappedType,
      unwrappedType
    );
  }

  if (type.kind === Kind.NAMED_TYPE && type.name) {
    if (type.name.kind === Kind.NAME) {
      unwrappedType[TypeWrappers.NAME] = type.name.value;
    }
  } else if (type.kind === Kind.LIST_TYPE) {
    unwrappedType.wrappers[TypeWrappers.LIST_TYPE] = true;
  } else if (type.kind === Kind.NON_NULL_TYPE) {
    if (wrappedType) {
      if (wrappedType.kind === Kind.NAMED_TYPE) {
        unwrappedType.wrappers[TypeWrappers.NON_NULL_NAMED_TYPE] = true;
      } else if (wrappedType.kind === Kind.LIST_TYPE) {
        unwrappedType.wrappers[TypeWrappers.NON_NULL_LIST_TYPE] = true;
      }
    }
  }
  return unwrappedType;
};