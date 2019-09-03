import { ApolloError, AuthenticationError, ForbiddenError, UserInputError } from 'apollo-server-core'
export default class Error {
  constructor (error) {
    switch (error.status) {
      case 400: this.UserInputError(error)
        break
      case 401: this.AuthenticationError(error)
        break
      case 403: this.ForbiddenError(error)
        break
      default: this.ApolloError(error)
    }
  }

  AuthenticationError (error) {
    throw new AuthenticationError(error.message)
  }

  ForbiddenError (error) {
    throw new ForbiddenError(error.message)
  }

  UserInputError (error) {
    throw new UserInputError(error.message)
  }

  ApolloError (error) {
    throw new ApolloError(error.message, error.status, error)
  }
}
