import User from '../../src/models/User'

describe('Check attr of User', () => {
  const nameUser = "some name"
  const idUser = 1
  const user = new User(idUser, nameUser)

  it('User have citizenId', () => {
    expect(user.citizenId).toBe(idUser);
  });
  
  it("User have name", () => {
    expect(user.name).toBe(nameUser); 
  })
  
})
