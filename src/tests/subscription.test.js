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
    const { data: { traineeAdded } } = result
    expect(traineeAdded.result).toHaveProperty('message')
    expect(traineeAdded.result.message).toEqual('Trainee Created Successfully')
    expect(traineeAdded.result).toHaveProperty('data')
    expect(traineeAdded.result.data).toHaveProperty('name')
    expect(traineeAdded.result.data.name).toEqual('y')
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
    const { data: { traineeUpdated } } = result
    expect(traineeUpdated.result).toHaveProperty('message')
    expect(traineeUpdated.result.message).toEqual('Trainee Updated Successfully')
    expect(traineeUpdated.result).toHaveProperty('data')
    expect(traineeUpdated.result.data).toHaveProperty('id')
    expect(traineeUpdated.result.data.id).toEqual('5d7608f2a646f0427670cfe6')
    done()
  })
  it('trainee deleted', async (done) => {
    addMockFunctionsToSchema({
      schema,
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
    const { data: { traineeDeleted } } = result
    expect(traineeDeleted.result).toHaveProperty('message')
    expect(traineeDeleted.result.message).toEqual('Trainee Deleted Successfully')
    expect(traineeDeleted.result).toHaveProperty('data')
    expect(traineeDeleted.result.data).toHaveProperty('id')
    expect(traineeDeleted.result.data.id).toEqual('5d7608fea646f0427670cfe8')
    done()
  })
})
