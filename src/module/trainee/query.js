export default {
  Query: {
    getTrainee (parent, args, context, info) {
      const { dataSources } = context
      const { skip, limit } = args
      return dataSources.traineeApi.getTrainee(skip, limit)
    },
    login (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password } } = args
      return dataSources.userApi.login(email, password)
    }
  },
  loginResult: {
    __resolveType (obj, context, info) {
      if (obj.data) {
        return 'loginResponse'
      }

      if (obj.error) {
        return 'errorMessage'
      }

      return null
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
