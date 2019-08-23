export default {
  Query: {
    getTrainee (parent, args, context, info) {
      const { dataSources } = context
      const { skip, limit } = args
      return dataSources.traineeApi.getTrainee(skip, limit)
    }
  },
  getTraineeResponse: {
    __resolveType (obj, context, info) {
      if (obj.data) {
        return 'AllTrainee'
      }

      if (obj.error) {
        return 'errorMessage'
      }

      return null
    }
  }
}
