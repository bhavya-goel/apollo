import serviceData from './mockData/serviceData'
import token from './mockData/token'
import subscription from '../module/trainee/subscription'
import { stub } from 'sinon'
import { pubSub } from '../subscription'

jest.useFakeTimers()
const { createSuccess, updateSucess, deleteSuccess } = serviceData

pubSub.publish('TRAINEE_ADDED', { traineeAdded: { result: createSuccess, context: token } })
pubSub.publish('TRAINEE_UPDATED', { traineeUpdated: { result: updateSucess, context: token } })
pubSub.publish('TRAINEE_DELETED', { traineeDeleted: { result: deleteSuccess, context: token } })
jest.runAllTimers()

const {
  Subscription: {
    traineeAdded,
    traineeUpdated,
    traineeDeleted
  }
} = subscription
stub(traineeAdded, 'subscribe').returns(serviceData.createSuccess)
stub(traineeUpdated, 'subscribe').returns(serviceData.updateSucess)
stub(traineeDeleted, 'subscribe').returns(serviceData.deleteSuccess)

describe('subscription test cases', () => {
  it('trainee Added', (done) => {
    const result = traineeAdded.subscribe()
    expect(result).toEqual(serviceData.createSuccess)
    done()
  })
  it('trainee Updated', (done) => {
    const result = traineeUpdated.subscribe()
    expect(result).toEqual(serviceData.updateSucess)
    done()
  })
  it('trainee Deleted', (done) => {
    const result = traineeDeleted.subscribe()
    expect(result).toEqual(serviceData.deleteSuccess)
    done()
  })
})
