import serviceData from './mockData/serviceData'
import { schema } from '../index'
import { graphql } from 'graphql'
import { addMockFunctionsToSchema } from 'apollo-server-express'

describe('subscription test cases', () => {
  it('trainee Added', async (done) => {
    addMockFunctionsToSchema({
      schema: schema,
      mocks: {
        traineeAddResponse: () => {
          return {
            result: serviceData.createSuccess
          }
        }
      }
    })
    const query = `
      subscription{
        traineeAdded{
          result{
            message
            data{
              name
            }
          }
        }
      }`
    const result = await graphql(schema, query)
    expect(result.data.traineeAdded.result).toHaveProperty('message')
    expect(result.data.traineeAdded.result.message).toEqual('Trainee Created Successfully')
    expect(result.data.traineeAdded.result).toHaveProperty('data')
    expect(result.data.traineeAdded.result.data).toHaveProperty('name')
    expect(result.data.traineeAdded.result.data.name).toEqual('y')
    done()
  })
  it('trainee Updated', async (done) => {
    addMockFunctionsToSchema({
      schema: schema,
      mocks: {
        traineeSubscribeResponse: () => {
          return {
            result: serviceData.updateSucess
          }
        }
      }
    })
    const query = `
      subscription{
        traineeUpdated{
          result{
            message
            data{
              id
            }
          }
        }
      }`
    const result = await graphql(schema, query)
    expect(result.data.traineeUpdated.result).toHaveProperty('message')
    expect(result.data.traineeUpdated.result.message).toEqual('Trainee Updated Successfully')
    expect(result.data.traineeUpdated.result).toHaveProperty('data')
    expect(result.data.traineeUpdated.result.data).toHaveProperty('id')
    expect(result.data.traineeUpdated.result.data.id).toEqual('5d7608f2a646f0427670cfe6')
    done()
  })
  it('trainee deleted', async (done) => {
    addMockFunctionsToSchema({
      schema: schema,
      mocks: {
        traineeSubscribeResponse: () => {
          return {
            result: serviceData.deleteSuccess
          }
        }
      }
    })
    const query = `
      subscription{
        traineeDeleted{
          result{
            message
            data{
              id
            }
          }
        }
      }`
    const result = await graphql(schema, query)
    expect(result.data.traineeDeleted.result).toHaveProperty('message')
    expect(result.data.traineeDeleted.result.message).toEqual('Trainee Deleted Successfully')
    expect(result.data.traineeDeleted.result).toHaveProperty('data')
    expect(result.data.traineeDeleted.result.data).toHaveProperty('id')
    expect(result.data.traineeDeleted.result.data.id).toEqual('5d7608fea646f0427670cfe8')
    done()
  })
})
