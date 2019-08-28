import { ApolloError } from 'apollo-server-core'
import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'

export default {
  Mutation: {
    // mutation to create a new trainee
    async createTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password, name } } = args
      const result = await dataSources.traineeApi.createTrainee(email, password, name)

      if (result.error) {
        throw new ApolloError(result.message, result)
      }

      pubSub.publish(TRAINEE_ADDED, { traineeAdded: result })
      return result
    },

    // mutation to update trainee
    async updateTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { id, dataToUpdate } } = args
      const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate)

      if (result.error) {
        throw new ApolloError(result.message, result)
      }

      pubSub.publish(TRAINEE_UPDATED, { traineeUpdated: result })
      return result
    },

    // mutation to delete trainee
    async deleteTrainee (parent, args, context) {
      const { dataSources } = context
      const { id } = args
      const result = await dataSources.traineeApi.deleteTrainee(id)

      if (result.error) {
        throw new ApolloError(result.message, result)
      }

      pubSub.publish(TRAINEE_DELETED, { traineeDeleted: result })
      return result
    }

  }

}
