import { Error } from '../../libs'
export default {
  Query: {

    async getTrainee (parent, args, context, info) {
      const { dataSources } = context
      const { skip, limit } = args
      const result = await dataSources.traineeApi.getTrainee(skip, limit)
      if (result.error) {
        throw new Error(result)
      }
      return result
    },

    async login (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password } } = args
      const result = await dataSources.userApi.login(email, password)
      if (result.error) {
        throw new Error(result)
      }
      return result
    }

  }

}
