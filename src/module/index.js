import { traineeResolver } from './trainee'
import { userResolver } from './user'
import { mergeResolvers } from 'merge-graphql-schemas'
const resolver = [
  userResolver,
  traineeResolver
]

export default mergeResolvers(resolver)
