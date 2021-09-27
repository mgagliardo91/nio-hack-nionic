import { makeExtendSchemaPlugin } from 'graphile-utils'
import { Plugin } from 'postgraphile'

import getResolvers from '../resolvers'
import getTypeDefs from '../types'

export default (): Plugin => {
  return makeExtendSchemaPlugin((build) => {
    return {
      typeDefs: getTypeDefs(build),
      resolvers: getResolvers(),
    }
  })
}
