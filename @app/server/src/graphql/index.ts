import { makeExtendSchemaPlugin, makeWrapResolversPlugin } from 'graphile-utils'
import { merge } from 'lodash';

import getResolvers from './resolvers'
import getTypeDefs from './types'
import getWrappedResolvers from './wrapped'

export const extendSchema = makeExtendSchemaPlugin((build) => {
  return {
    typeDefs: getTypeDefs(build),
    resolvers: getResolvers(),
  }
})

const merged = getWrappedResolvers().reduce(
  (acc, resolver) => merge(acc, resolver),
  {},
)
export const extendResolvers = makeWrapResolversPlugin(merged)
