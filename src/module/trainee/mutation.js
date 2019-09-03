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

        if (result.error) {
          return new Error(result)
        }

        pubSub.publish(TRAINEE_ADDED, { traineeAdded: result })
        return result
      } catch (err) {
        return err
      }
    },

    // mutation to update trainee
    async updateTrainee (parent, args, context) {
      try {
        const { dataSources } = context
        const { input: { id, dataToUpdate } } = args
        const result = await dataSources.traineeApi.updateTrainee(id, dataToUpdate)

        if (result.error) {
          return new Error(result)
        }
        pubSub.publish(TRAINEE_UPDATED, { traineeUpdated: result })
        return result
      } catch (err) {
        return err
      }
    },

    // mutation to delete trainee
    async deleteTrainee (parent, args, context) {
      try {
        const { dataSources } = context
        const { id } = args
        const result = await dataSources.traineeApi.deleteTrainee(id)

        if (result.error) {
          return new Error(result)
        }

        pubSub.publish(TRAINEE_DELETED, { traineeDeleted: result })
        return result
      } catch (err) {
        return err
      }
    }

  }

}
