import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import deleteTrainee from './mockData/deleteTrainee'
import token from './mockData/token'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'deleteTrainee')
describe('delete trainee successfully', () => {
  it('try to delete successfully', async (done) => {
    stub1.returns(serviceData.deleteSuccess)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: deleteTrainee.success
      })
    expect(res.body.data.deleteTrainee).toHaveProperty('data')
    expect(res.body.data.deleteTrainee.data).toHaveProperty('id')
    expect(res.body.data.deleteTrainee.data.id).toEqual('5d7608fea646f0427670cfe8')
    expect(res.body.data.deleteTrainee).toHaveProperty('message')
    expect(res.body.data.deleteTrainee.message).toEqual('Trainee Deleted Successfully')
    expect(res.body.data.deleteTrainee).toHaveProperty('status')
    expect(res.body.data.deleteTrainee.status).toEqual('200')
    done()
  })

  it('try to delete trainee with wrong ID', async (done) => {
    stub1.throws(serviceData.deleteFail)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: deleteTrainee.fail
      })

    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('User not found')
    expect(res.body.data.deleteTrainee).toEqual(null)
    done()
  })
})
