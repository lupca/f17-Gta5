import BaseApi from './base.api'

export default class UserApi extends BaseApi{
  constructor(){
    super()
    this.url = "/player"
  }

  async searchBy({citizenId} = {}) {
    this.params = citizenId
    return await this.setParamsToUrl().postData()
  }
}
