import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const app = express();
const typeDefs = gql `
    type Query {
        hello: String
        }
`;

const resolvers = {
    Query: {
        hello: () => 'hello',
    },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

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

