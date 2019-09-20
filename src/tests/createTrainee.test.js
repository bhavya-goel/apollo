import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import createData from './mockData/createTrainee'
import userApi from '../services/userApi'
import token from './mockData/token'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'createTrainee')
const stub2 = stub(userApi.prototype, 'getMeWithID')

describe('create trainee successfully', () => {
  it('try to create trainee successfully', async (done) => {
    stub2.returns(serviceData.createByResponse)
    stub1.returns(serviceData.createSuccess)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: createData.success
      })
    const { body: { data: { createTrainee } } } = res
    expect(createTrainee).toHaveProperty('data')
    expect(createTrainee.data).toHaveProperty('name')
    expect(createTrainee.data.name).toEqual('y')
    expect(createTrainee).toHaveProperty('message')
    expect(createTrainee.message).toEqual('Trainee Created Successfully')
    expect(createTrainee).toHaveProperty('status')
    expect(createTrainee.status).toEqual('200')
    done()
  })

  it('try to create trainee with existing email', async (done) => {
    stub1.throws(serviceData.createEmailFail)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: createData.success
      })
    const { body: { errors, data } } = res
    expect(res.body).toHaveProperty('errors')
    expect(errors[0].message).toContain('email exists')
    expect(data.createTrainee).toEqual(null)
    done()
  })

  it('create trainee with wrong input type', async (done) => {
    stub1.reset()
    stub1.throws(serviceData.createWrongInput)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: createData.wrongInput
      })
    const { body: { errors, data } } = res
    expect(res.body).toHaveProperty('errors')
    expect(errors[0].message).toContain('Please enter email in proper format')
    expect(errors[0].message).toContain('enter a alphanumeric name')
    expect(errors[0].message).toContain('password cannot be empty')
    expect(data.createTrainee).toEqual(null)
    done()
  })
})
