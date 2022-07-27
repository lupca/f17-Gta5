export default class BaseApi {
  constructor(){
    this.url = ''
    this.timeout = 600000
    this.contentType = "application/json"
    this.cache = 'no-cache'
    this.data = {}
    this.params = ''
  }

  async postData() {
    const response = await fetch(this.url, {
      method: 'post',
      mode: 'cors',
      cache: this.cache,
      headers: {
        'Content-Type': this.contentType
      },
      body: JSON.stringify(this.data)
    });
    return response.json();
  }

  async getData() {
    const response = await fetch(this.url, {
      method: 'post',
      mode: 'cors',
      cache: this.cache,
      headers: {
        'Content-Type': this.contentType
      },
    });
    return response.json();
  }

  setParamsToUrl() {
    this.url = this.url + this.params
    return this
  }
}
