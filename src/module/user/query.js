import { Error } from '../../libs'
export default {
  Query: {
    async me (parent, args, context, info) {
      const { dataSources } = context
      const result = await dataSources.userApi.getMe()
      if (result.error) {
        const err = new Error(result)
        err()
      }
      return result
    }
  }
}
