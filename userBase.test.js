const UserBase = require('./userBase.js')
const User = require('./user.js')

describe('userBase', () => {
  const users = [
    new User('Uma'),
    new User('Josh'),
    new User('Ollie')
  ];
  const userBase = new UserBase(users);

  it('counts the number of users', () => {
    expect(userBase.count()).toBe(3);
  })

  it('gets the users names', () => {
    expect(userBase.getNames()).toEqual([ 'Uma', 'Josh', 'Ollie' ])
  })

  it('gets the users introductions', () => {
    expect(userBase.getIntroductions()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
  })
});