import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import getData from './mockData/getTrainee'
import userApi from '../services/userApi'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'getTrainee')
const stub2 = stub(userApi.prototype, 'getMeWithID')

describe('get All trainees successfully', () => {
  it('try to fetch all trainees successfully', async (done) => {
    stub2.returns(serviceData.createByResponse)
    stub1.returns(serviceData.getAllSuccess)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: getData.success
      })
    expect(res.body.data.getTrainee).toHaveProperty('data')
    expect(res.body.data.getTrainee.data).toHaveProperty('count')
    expect(res.body.data.getTrainee.data).toHaveProperty('records')
    expect(res.body.data.getTrainee).toHaveProperty('message')
    expect(res.body.data.getTrainee.message).toEqual('Successfully fetched trainees')
    expect(res.body.data.getTrainee).toHaveProperty('status')
    expect(res.body.data.getTrainee.status).toEqual('200')
    done()
  })
})
