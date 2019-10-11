import { Error } from '../../libs'
export default {
  Query: {
    // resolver for me query
    async me (parent, args, context, info) {
      try {
        const { dataSources } = context
        const result = await dataSources.userApi.getMe()
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    },

    // resolver for login query
    async login (parent, args, context) {
      try {
        const { dataSources } = context
        const { input: { email, password } } = args
        const result = await dataSources.userApi.login(email, password)
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    }

  }
}
