import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import createData from './mockData/createTrainee'
import userApi from '../services/userApi'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'createTrainee')
const stub2 = stub(userApi.prototype, 'getMeWithID')

describe('login successfully', () => {
  it('try to login successfully', async (done) => {
    stub2.returns(serviceData.createByResponse)
    stub1.returns(serviceData.createSuccess)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: createData.success
      })

    expect(res.body.data.createTrainee).toHaveProperty('data')
    expect(res.body.data.createTrainee.data).toHaveProperty('name')
    expect(res.body.data.createTrainee.data.name).toEqual('y')
    expect(res.body.data.createTrainee).toHaveProperty('message')
    expect(res.body.data.createTrainee.message).toEqual('Trainee Created Successfully')
    expect(res.body.data.createTrainee).toHaveProperty('status')
    expect(res.body.data.createTrainee.status).toEqual('200')
    done()
  })
})
