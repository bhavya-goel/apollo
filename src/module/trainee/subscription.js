import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'
import { withFilter } from 'graphql-subscriptions'
import * as jwt from 'jsonwebtoken'
import { configuration } from '../../config'

const check = (id, token, subscriptionToken) => {
  try {
    const { secretKey: key } = configuration
    const userInfo = jwt.verify(token, key)
    const subscriberInfo = jwt.verify(subscriptionToken, key)

    // the trainee on whom operations are done can listen
    if (id === subscriberInfo.originalID) {
      return true
    } else if (subscriberInfo.role === 'head-trainer') {
      // head trainer can listen to subscriptions
      return true
    } else if (userInfo.role === 'trainee') {
      // trainee who is performing the operation can listen
      const IsSameRole = userInfo.role === subscriberInfo.role
      const IsSameId = userInfo.originalID === subscriberInfo.originalID
      return IsSameId && IsSameRole
    }
    return false
  } catch (err) {
    return false
  }
}

export default {

  Subscription: {

    traineeAdded: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_ADDED]),
        (payload, variables, context) => {
          const { traineeAdded: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          const result = check(undefined, token, subscriptionToken)
          return result
        }
      )
    },

    traineeDeleted: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_DELETED]),
        (payload, variables, context) => {
          const { traineeDeleted: { result: { data: { id } }, context: { token } } } = payload
          const { token: subscriptionToken } = context
          const result = check(id, token, subscriptionToken)
          return result
        }
      )
    },

    traineeUpdated: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_UPDATED]),
        (payload, variables, context) => {
          const { traineeUpdated: { result: { data: { id } }, context: { token } } } = payload
          const { token: subscriptionToken } = context
          const result = check(id, token, subscriptionToken)
          return result
        }
      )
    }

  }

}
