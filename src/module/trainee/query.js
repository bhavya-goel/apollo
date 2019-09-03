import { Error } from '../../libs'
export default {
  Query: {

    async getTrainee (parent, args, context, info) {
      try {
        const { dataSources } = context
        const { skip, limit } = args
        const result = await dataSources.traineeApi.getTrainee(skip, limit)
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
