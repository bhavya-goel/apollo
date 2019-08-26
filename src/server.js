import { ApolloServer } from 'apollo-server-express'
import { configuration } from './config'
import express from 'express'
import { createServer } from 'http'
import { typeDef, resolver } from '.'
import TraineeApi from './services/traineeApi'
import UserApi from './services/userApi'

const app = express()
const server = createServer(app)
const { port } = configuration

const apolloServer = new ApolloServer({
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

apolloServer.installSubscriptionHandlers(server)
apolloServer.applyMiddleware({ app, path: '/' })

server.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${apolloServer.graphqlPath}`)
  console.log(`Subscriptions ready at ws://localhost:${port}${apolloServer.subscriptionsPath}`)
})
