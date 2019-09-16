import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import traineeApi from '../services/traineeApi'
import serviceData from './mockData/serviceData'
import updateTrainee from './mockData/updateTrainee'
import token from './mockData/token'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(traineeApi.prototype, 'updateTrainee')
describe('update trainee successfully', () => {
  it('try to update successfully', async (done) => {
    stub1.returns(serviceData.updateSucess)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
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

  it('try to update trainee with existing email', async (done) => {
    stub1.throws(serviceData.updateWithAlreadyEmail)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: updateTrainee.emailExists
      })

    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('email exists')
    expect(res.body.data.updateTrainee).toEqual(null)
    done()
  })

  it('try to update trainee with wrong ID', async (done) => {
    stub1.reset()
    stub1.throws(serviceData.updateWrongID)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: updateTrainee.wrongID
      })

    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('User not found')
    expect(res.body.data.updateTrainee).toEqual(null)
    done()
  })

  it('try to update trainee with wrong dataToUpdate type', async (done) => {
    stub1.reset()
    stub1.throws(serviceData.updateWithWrongData)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: updateTrainee.wrongDataToUpdate
      })

    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('enter an alphanumeric name,password cannot be empty')
    expect(res.body.data.updateTrainee).toEqual(null)
    done()
  })
})
