import { RESTDataSource } from 'apollo-datasource-rest'
import { configuration } from '../config'

export default class TraineeApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = configuration.service_url
  }

  willSendRequest (request) {
    request.headers.set('Authorization', this.context.token)
  }

  async getTrainee (skip = 0, limit = 0) {
    const result = await this.get('trainee', { skip, limit })
    return result
  }

  async createTrainee (email, password, name) {
    return this.post('trainee', { email, password, name })
  }

  async updateTrainee (id, dataToUpdate) {
    return this.put('trainee', { id, dataToUpdate })
  }

  async deleteTrainee (id) {
    return this.delete(`trainee/${id}`)
  }
}
