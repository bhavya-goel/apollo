import { ApolloServer, gql } from 'apollo-server-express';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import { IConfig } from './config';
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

export class Server {

    private app;
    constructor(private config: IConfig) {
        this.app = express();
    }

    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public initBodyParser() {
        const { app } = this;
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded( { extended: false}));
    }

    public setupRoutes() {
        this.run();
    }

    public run() {
        const { app, config: { port } } = this;
        apolloServer.applyMiddleware({ app, path: '/' });
        app.listen({ port }, () => {
            console.log('server running>>>>>>>>>\nport ::::::::::', port);
        });
        return this;
    }
}
