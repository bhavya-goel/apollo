import { traineeMutation, traineeResolver, traineeSubscription } from './trainee'
import { userMutation, userResolver } from './user'
import { mergeResolvers } from 'merge-graphql-schemas'
const resolver = [
  userResolver,
  traineeResolver,
  userMutation,
  traineeMutation,
  traineeSubscription
]

export default mergeResolvers(resolver)
