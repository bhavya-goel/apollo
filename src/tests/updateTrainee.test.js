import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import updateTrainee from './mockData/updateTrainee'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'updateTrainee')
describe('delete trainee successfully', () => {
  it('try to delete successfully', async (done) => {
    stub1.returns(serviceData.updateSucess)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: updateTrainee.success
      })
    expect(res.body.data.updateTrainee).toHaveProperty('data')
    expect(res.body.data.updateTrainee.data).toHaveProperty('id')
    expect(res.body.data.updateTrainee.data.id).toEqual('5d7608f2a646f0427670cfe6')
    expect(res.body.data.updateTrainee).toHaveProperty('message')
    expect(res.body.data.updateTrainee.message).toEqual('Trainee Updated Successfully')
    expect(res.body.data.updateTrainee).toHaveProperty('status')
    expect(res.body.data.updateTrainee.status).toEqual('200')
    done()
  })
})
