import path from 'path';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';
const resolversArray = fileLoader(path.join(__dirname, './**/query.js')) 
const typesArray = fileLoader(path.join(__dirname, './**/types.graphql'));
export const resolver = mergeResolvers(resolversArray);
export const deftype =  mergeTypes(typesArray, { all: true });
