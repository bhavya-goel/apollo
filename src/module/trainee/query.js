import { Error } from '../../libs'
export default {
  Query: {

    async getTrainee (parent, args, context, info) {
      try {
        const { dataSources } = context
        const { skip, limit, sort } = args
        const result = await dataSources.traineeApi.getTrainee(skip, limit, sort)
        return result
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    }
  },
  userName: {
    async name (parent, args, context, info) {
      try {
        const { dataSources } = context
        const result = await dataSources.userApi.getMeWithID(parent)
        return result.data.name
      } catch (err) {
        const { extensions: { response: { body } } } = err
        return new Error(body)
      }
    }
  }

}
