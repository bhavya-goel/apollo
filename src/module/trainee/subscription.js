import { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED } from '../../subscription'
import { withFilter } from 'graphql-subscriptions'
import * as jwt from 'jsonwebtoken'
import { configuration } from '../../config'

const check = (token, subscriptionToken) => {
  try {
    const { secretKey: key } = configuration
    const userInfo = jwt.verify(token, key)
    const subscriberInfo = jwt.verify(subscriptionToken, key)
    if (userInfo.role === 'head-trainer') {
      return userInfo.role === subscriberInfo.role
    } else if (userInfo.role === 'trainee') {
      const IsSameRole = userInfo.role === subscriberInfo.role
      const IsSameId = userInfo.originalID === subscriberInfo.originalID
      return IsSameId && IsSameRole
    }
  } catch (err) {
    console.log('invalid token')
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
          const result = check(token, subscriptionToken)
          return result
        }
      )
    },

    traineeDeleted: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_DELETED]),
        (payload, variables, context) => {
          const { traineeDeleted: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          const result = check(token, subscriptionToken)
          return result
        }
      )
    },

    traineeUpdated: {
      subscribe: withFilter(
        () => pubSub.asyncIterator([TRAINEE_UPDATED]),
        (payload, variables, context) => {
          const { traineeUpdated: { context: { token } } } = payload
          const { token: subscriptionToken } = context
          const result = check(token, subscriptionToken)
          return result
        }
      )
    }

  }

}
