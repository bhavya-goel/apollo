export default {
  Mutation: {
    login (parent, args, context) {
      const { dataSources } = context
      const { input: { email, password } } = args
      return dataSources.userApi.login(email, password)
    }
  }
}
