import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import userApi from '../services/userApi'
import serviceData from './mockData/serviceData'
import userMe from './mockData/userMe'
import token from './mockData/token'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(userApi.prototype, 'getMe')
const stub2 = stub(userApi.prototype, 'getMeWithID')

describe('fetch user successfully', () => {
  it('try to fetch user successfully', async (done) => {
    stub2.returns(serviceData.createByResponse)
    stub1.returns(serviceData.userMeSuccess)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', token)
      .send({
        query: userMe.success
      })
    expect(res.body.data.me).toHaveProperty('data')
    expect(res.body.data.me).toHaveProperty('message')
    expect(res.body.data.me).toHaveProperty('status')
    expect(res.body.data.me.data).toHaveProperty('name')
    done()
  })

  it('try to fetch user with wrong token', async (done) => {
    stub1.throws(serviceData.userMeFail)
    const res = await request(app1.server)
      .post('/')
      .set('Authorization', 'dscwdwqsqwqe')
      .send({
        query: userMe.success
      })

    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('Authentication failed')
    expect(res.body.data.me).toEqual(null)
    done()
  })
})
