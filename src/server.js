import { ApolloServer } from 'apollo-server-express'
import { configuration } from './config'
import express from 'express'
import { typeDef, resolver } from '.'
import TraineeApi from './services/traineeApi'
import UserApi from './services/userApi'
const app = express()
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
  context: ({ req }) => {
    return {
      token: req.headers.authorization
    }
  }
})
apolloServer.applyMiddleware({ app, path: '/' })
app.listen({ port }, () => {
  console.log('server running>>>>>>>>>\nport ::::::::::', port)
})
