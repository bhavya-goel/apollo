export default {
  Query: {
    me (parent, args, context, info) {
      const { dataSources } = context
      return dataSources.userApi.getMe()
    }
  },
  meResult: {
    __resolveType (obj, context, info) {
      if (obj.data) {
        return 'GetMe'
      }

      if (obj.error) {
        return 'errorMessage'
      }

      return null
    }
  }
}
