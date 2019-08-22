export default {
  Query: {
    me (parent, args, context, info) {
      const { dataSources } = context
      return dataSources.userApi.getMe()
    }
  }
}
