const { login } = require('./auth');

describe('Login regression tests', () => {
  test('rejects an incorrect password', () => {
    expect(() => login('admin', 'wrong')).toThrow('Invalid username or password');
  });

  test('rejects an empty username', () => {
    expect(() => login('', '123')).toThrow('Username is required');
  });

  test('rejects a password containing special characters', () => {
    expect(() => login('admin', '123!')).toThrow('Password contains special characters');
  });

  test('rejects a locked account', () => {
    expect(() => login('locked', '123')).toThrow('Account is locked');
  });

  test('rejects an unknown username', () => {
    expect(() => login('guest', '123')).toThrow('Invalid username or password');
  });
});
