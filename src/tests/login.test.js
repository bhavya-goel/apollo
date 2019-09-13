/* eslint-disable no-undef */
import request from 'supertest'
import { configuration } from '../config'
import Server from '../server'
import { stub } from 'sinon'
import userApi from '../services/userApi'
import serviceData from './mockData/serviceData'
import loginData from './mockData/loginData'

const server1 = new Server(configuration)
const app1 = server1.bootloader()
const stub1 = stub(userApi.prototype, 'login')
describe('login successfully', () => {
  it('try to login successfully', async (done) => {
    stub1.returns(serviceData.loginSuccess)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.loginSuccess
      })
    expect(res.body.data.login).toHaveProperty('data')
    expect(res.body.data.login).toHaveProperty('message')
    expect(res.body.data.login).toHaveProperty('status')
    expect(res.body.data.login.status).toEqual('200')
    done()
  })

  it('try to login with wrong email type', async () => {
    stub1.throws(serviceData.loginError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongEmailType
      })
    expect(res.body).toHaveProperty('errors')
    expect(res.body.data.login).toEqual(null)
  })

  it('try to login with wrong email', async () => {
    stub1.throws(serviceData.emailError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongEmail
      })
    expect(res.body).toHaveProperty('errors')
    expect(res.body.data.login).toEqual(null)
  })

  it('try to login with wrong password', async () => {
    stub1.throws(serviceData.passwordError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongPassword
      })
    expect(res.body).toHaveProperty('errors')
    expect(res.body.data.login).toEqual(null)
  })
})
