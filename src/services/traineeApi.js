import { RESTDataSource } from 'apollo-datasource-rest'
import { configuration } from '../config'

export default class TraineeApi extends RESTDataSource {
  constructor () {
    super()
    this.baseURL = configuration.service_url
  }

  // runs everytime api is hit
  willSendRequest (request) {
    request.headers.set('Authorization', this.context.token)
  }

  // hit GET api
  async getTrainee (skip = 0, limit = 10, sort = 1) {
    const result = await this.get('trainee', { skip, limit, sort })
    return result
  }

  // hit POST api
  async createTrainee (email, password, name) {
    return this.post('trainee', { email, password, name })
  }

  // hit PUT api
  async updateTrainee (id, dataToUpdate) {
    return this.put('trainee', { id, dataToUpdate })
  }

  // hit DELETE api
  async deleteTrainee (id) {
    return this.delete(`trainee/${id}`)
  }
}
