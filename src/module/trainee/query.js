export default {
  Query: {
    getTrainee (parent, args, context, info) {
      const { dataSources } = context
      const { skip, limit } = args
      return dataSources.traineeApi.getTrainee(skip, limit)
    }
  }
}
