import UserApi from '../../src/api/user.api'

describe('Check attr of UserApi', () => {
  const userApi = new UserApi()

  it('UserApi have url', () => {
    expect(userApi.subdiretory).toBe("/player");
  })
})
  
describe('Check action of UserApi', () => {
  const userApi = new UserApi()
  
  it('User have urlWithParams', () => {
    userApi.params = '/1'
    expect(userApi.setParamsToUrl().url).toBe(userApi.domain + userApi.subdiretory + '/1');
  });

  it('UserApi Search by', async () => {
    // pedding
  })
})
