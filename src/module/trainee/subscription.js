import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'
export default {
  Subscription: {
    traineeAdded: {
      subscribe: () => pubSub.asyncIterator([TRAINEE_ADDED])
    },
    traineeDeleted: {
      subscribe: () => pubSub.asyncIterator([TRAINEE_DELETED])
    },
    traineeUpdated: {
      subscribe: () => pubSub.asyncIterator([TRAINEE_UPDATED])
    }
  }
}
