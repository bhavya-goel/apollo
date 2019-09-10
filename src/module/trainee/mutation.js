import { Error } from '../../libs'
import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'

export default {
  Mutation: {
    // mutation to create a new trainee
    async createTrainee (parent, args, context) {
      try {
        const { dataSources } = context
        const { input: { email, password, name } } = args
        const result = await dataSources.traineeApi.createTrainee(email, password, name)
        pubSub.publish(TRAINEE_ADDED, { traineeAdded: { result, context } })
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    },

    // mutation to update trainee
    async updateTrainee (parent, args, context) {
      try {
        const { dataSources } = context
        const { input: { id, dataToUpdate } } = args
        const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate)
        pubSub.publish(TRAINEE_UPDATED, { traineeUpdated: { result, context } })
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    },

    // mutation to delete trainee
    async deleteTrainee (parent, args, context) {
      try {
        const { dataSources } = context
        const { id } = args
        const result = await dataSources.traineeApi.deleteTrainee(id)
        pubSub.publish(TRAINEE_DELETED, { traineeDeleted: { result, context } })
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    }

  }

}
