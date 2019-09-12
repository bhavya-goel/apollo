import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'
import { makeExecutableSchema } from 'apollo-server-express';

import resolver from './module'

// merge all the typedefs from all .graphql files
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'))
const typeDef = mergeTypes(typesArray, { all: true })
const schema = makeExecutableSchema({ typeDefs: typeDef, resolvers: resolver })

export { schema }
export { default as Server } from './server'
