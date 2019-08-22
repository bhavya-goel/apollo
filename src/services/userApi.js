import { RESTDataSource } from 'apollo-datasource-rest'
import { configuration } from '../config'
export default class UserApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = configuration.service_url
  }

  willSendRequest (request) {
    request.headers.set('Authorization', this.context.token)
  }

  async getMe () {
    const result = await this.get('user/me')
    return result
  }

  async login (email, password) {
    return this.post('user/login', { email, password })
  }
}
