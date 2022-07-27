import UserApi from '../../src/api/user.api'

describe('Check attr of UserApi', () => {
  const userApi = new UserApi()

  it('UserApi have url', () => {
    expect(userApi.url).toBe("/player");
  })
})
  
describe('Check action of UserApi', () => {
  const userApi = new UserApi()
  
  it('User have urlWithParams', () => {
    userApi.params = '/1'
    expect(userApi.setParamsToUrl().url).toBe("/player/1");
  });

  it('UserApi Search by', () => {
    // pedding
    // await userApi.searchBy({citizenId: '/1'})
    // expect(userApi.setParamsToUrl().url).toBe("/player/1");
  })
})
