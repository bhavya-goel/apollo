import { RESTDataSource } from 'apollo-datasource-rest'
import { configuration } from '../config'

export default class UserApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = configuration.service_url
  }

  // runs everytime api is hit
  willSendRequest (request) {
    request.headers.set('Authorization', this.context.token)
  }

  // hit me api
  async getMe () {
    const result = await this.get('user/me')
    return result
  }

  // hit login api
  async login (email, password) {
    return this.post('user/login', { email, password })
  }
}
