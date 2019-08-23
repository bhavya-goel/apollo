export default {
  Mutation: {
    createTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password, name } } = args
      return dataSources.traineeApi.createTrainee(email, password, name)
    },
    updateTrainee (parent, args, context) {
      const { dataSources } = context
      const { input: { id, dataToUpdate } } = args
      return dataSources.traineeApi.updateTrainee(id, dataToUpdate, name)
    },
    deleteTrainee (parent, args, context) {
      const { dataSources } = context
      const { id } = args
      return dataSources.traineeApi.deleteTrainee(id)
    }
  },

  updateDeleteTraineeResponse: {
    __resolveType (obj, context, info) {
      if (obj.data) {
        return 'traineeResponse'
      }

      if (obj.error) {
        return 'errorMessage'
      }

      return null
    }
  }
}
