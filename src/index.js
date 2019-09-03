import path from 'path'
import { fileLoader, mergeTypes } from 'merge-graphql-schemas'

export { default as resolver } from './module'

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'))
export const typeDef = mergeTypes(typesArray, { all: true })
export { default as Server } from './server'
