import User from '../../src/model/User'

test('User have id', () => {
  const user = new User(1)
  expect(user.citizenId).toBe(1);
});
