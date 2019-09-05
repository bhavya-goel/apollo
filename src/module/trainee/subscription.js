import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'
import { withFilter } from 'graphql-subscriptions'

export default {

  Subscription: {

    traineeAdded: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_ADDED]),
        (payload, variables, context) => {
          const { traineeAdded: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          return token === subscriptionToken
        }
      )
    },

    traineeDeleted: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_DELETED]),
        (payload, variables, context) => {
          const { traineeDeleted: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          return token === subscriptionToken
        }
      )
    },

    traineeUpdated: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_UPDATED]),
        (payload, variables, context) => {
          const { traineeUpdated: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          return token === subscriptionToken
        }
      )
    }

  }

}
