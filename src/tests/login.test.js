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
    const { body: { data: { login } } } = res
    expect(login).toHaveProperty('data')
    expect(login).toHaveProperty('message')
    expect(login).toHaveProperty('status')
    expect(login.status).toEqual('200')
    done()
  })

  it('try to login with wrong email type', async () => {
    stub1.throws(serviceData.loginError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongEmailType
      })
    const { body: { errors, data } } = res
    expect(res.body).toHaveProperty('errors')
    expect(errors[0].message).toContain('Please enter email in format ( abc@successive.tech )special characters ( . -)allowed')
    expect(data.login).toEqual(null)
  })

  it('try to login with wrong email', async () => {
    stub1.reset()
    stub1.throws(serviceData.emailError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongEmail
      })
    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('Please sign up before login or provide correct email')
    expect(res.body.data.login).toEqual(null)
  })

  it('try to login with wrong password', async () => {
    stub1.reset()
    stub1.throws(serviceData.passwordError)
    const res = await request(app1.server)
      .post('/')
      .send({
        query: loginData.wrongPassword
      })
    expect(res.body).toHaveProperty('errors')
    expect(res.body.errors[0].message).toContain('please provide correct pasword')
    expect(res.body.data.login).toEqual(null)
  })
})
