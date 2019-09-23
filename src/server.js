import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { createServer } from 'http'
import { schema } from '.'
import TraineeApi from './services/traineeApi'
import UserApi from './services/userApi'

export default class Server {
  constructor (configuration) {
    this.config = configuration
    this.app = express()
    this.server = createServer(this.app)
  }

  bootloader () {
    const { app, server } = this
    this.apolloServer = new ApolloServer({
      schema,
      dataSources: () => {
        return {
          traineeApi: new TraineeApi(),
          userApi: new UserApi()
        }
      },

      context: ({ req, connection }) => {
        if (connection) {
          if (connection.context.Authorization) {
            return {
              // for web socket connection
              token: connection.context.Authorization
            }
          } else {
            throw new Error('token not found')
          }
        } else {
          return {
            // for http connection
            token: req.headers.authorization
          }
        }
      },

      subscriptions: '/'
    })
    this.apolloServer.installSubscriptionHandlers(server)
    this.apolloServer.applyMiddleware({ app, path: '/' })
    return this
  }

  async run () {
    const { port } = this.config
    await this.server.listen({ port }, () => {
      console.log(`Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`)
      console.log(`Subscriptions ready at ws://localhost:${port}${this.apolloServer.subscriptionsPath}`)
    })
    return this
  }
}
