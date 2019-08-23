export default {
  Mutation: {
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
  }
}
