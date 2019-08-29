import { Error } from '../../libs'
export default {
  Query: {
    async me (parent, args, context, info) {
      const { dataSources } = context
      const result = await dataSources.userApi.getMe()
      if (result.error) {
        throw new Error(result)
      }
      return result
    }
  }
}
