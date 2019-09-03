import { Error } from '../../libs'
export default {
  Query: {
    // resolver for me query
    async me (parent, args, context, info) {
      try {
        const { dataSources } = context
        const result = await dataSources.userApi.getMe()
        if (result.error) {
          return new Error(result)
        }
        return result
      } catch (err) {
        return err
      }
    },

    // resolver for login query
    async login (parent, args, context) {
      try {
        const { dataSources } = context
        const { input: { email, password } } = args
        const result = await dataSources.userApi.login(email, password)
        if (result.error) {
          return new Error(result)
        }
        return result
      } catch (err) {
        return err
      }
    }

  }
}
