import { ApolloError } from 'apollo-server-core'

export default {
  Mutation: {
    async createTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password, name } } = args
      const result = await dataSources.traineeApi.createTrainee(email, password, name)
      if (result.error) {
        throw new ApolloError(JSON.stringify(result))
      }
      return result
    },
    async updateTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { id, dataToUpdate } } = args
      const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate)
      if (result.error) {
        throw new ApolloError(JSON.stringify(result))
      }
      return result
    },
    async deleteTrainee (parent, args, context) {
      const { dataSources } = context
      const { id } = args
      const result = await dataSources.traineeApi.deleteTrainee(id)
      if (result.error) {
        throw new ApolloError(JSON.stringify(result))
      }
      return result
    }
  }
}
