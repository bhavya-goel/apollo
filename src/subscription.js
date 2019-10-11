import { PubSub } from 'apollo-server-express'

const pubSub = new PubSub()

// subscription names
const TRAINEE_ADDED = 'TRAINEE_ADDED'
const TRAINEE_DELETED = 'TRAINEE_DELETED'
const TRAINEE_UPDATED = 'TRAINEE_UPDATED'

export { pubSub, TRAINEE_ADDED, TRAINEE_UPDATED, TRAINEE_DELETED }
