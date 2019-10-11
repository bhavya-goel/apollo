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
    const { body: { data: { deleteTrainee: delTrainee } } } = res
    expect(delTrainee).toHaveProperty('data')
    expect(delTrainee.data).toHaveProperty('id')
    expect(delTrainee.data.id).toEqual('5d7608fea646f0427670cfe8')
    expect(delTrainee).toHaveProperty('message')
    expect(delTrainee.message).toEqual('Trainee Deleted Successfully')
    expect(delTrainee).toHaveProperty('status')
    expect(delTrainee.status).toEqual('200')
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
    const { body: { errors, data } } = res
    expect(res.body).toHaveProperty('errors')
    expect(errors[0].message).toContain('User not found')
    expect(data.deleteTrainee).toEqual(null)
    done()
  })
})
