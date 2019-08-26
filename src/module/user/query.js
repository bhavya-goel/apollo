import { ApolloError } from 'apollo-server-core'

export default {
  Query: {
    async me (parent, args, context, info) {
      const { dataSources } = context
      const result = await dataSources.userApi.getMe()
      if (result.error) {
        throw new ApolloError(JSON.stringify(result))
      }
      return result
    }
  }
}
