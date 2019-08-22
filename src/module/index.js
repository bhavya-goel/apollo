import { traineeMutation, traineeResolver } from './trainee'
import { userMutation, userResolver } from './user'
import { mergeResolvers } from 'merge-graphql-schemas'
const resolver = [
  userResolver,
  traineeResolver,
  userMutation,
  traineeMutation
]

export default mergeResolvers(resolver)
