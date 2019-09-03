import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import { createServer } from 'http'
import { typeDef, resolver } from '.'
import TraineeApi from './services/traineeApi'
import UserApi from './services/userApi'

const app = express()
const server = createServer(app)
export default class Server {
  constructor (configuration) {
    this.config = configuration
  }

  bootloader () {
    this.apolloServer = new ApolloServer({
      typeDefs: typeDef,
      resolvers: resolver,

      dataSources: () => {
        return {
          traineeApi: new TraineeApi(),
          userApi: new UserApi()
        }
      },

      context: ({ req, connection }) => {
        if (connection) {
          return {
            token: connection.context.Authorization
          }
        } else {
          return {
            token: req.headers.authorization
          }
        }
      },

      subscriptions: '/'
    })
    this.apolloServer.installSubscriptionHandlers(server)
    this.apolloServer.applyMiddleware({ app, path: '/' })
    this.run()
  }

  run () {
    const { port } = this.config
    server.listen({ port }, () => {
      console.log(`Server ready at http://localhost:${port}${this.apolloServer.graphqlPath}`)
      console.log(`Subscriptions ready at ws://localhost:${port}${this.apolloServer.subscriptionsPath}`)
    })
  }
}
