import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import { deftype , resolver } from './module';
console.log(deftype);
const app = express();
const apolloServer = new ApolloServer({ 
    typeDefs: deftype,
    resolvers: resolver,
    context: ({ req}) => {
        token: req.headers.authorization;
    }
,});

export default class server {
    constructor(configuration) {
        this.config = configuration;
        this.run();
    }
    run() {
        const { port } = this.config;
        apolloServer.applyMiddleware({ app, path: '/' });
        app.listen({ port }, () => {
        console.log('server running>>>>>>>>>\nport ::::::::::', port);
});
    }
}

