export default {
  Query: {
    getTrainee (parent, args, context, info) {
      const { dataSources } = context
      return dataSources.traineeApi.getTrainee()
    }
  }
}
