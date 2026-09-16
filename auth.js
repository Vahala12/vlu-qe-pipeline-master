function login(username, password) {
  if (!username) {
    throw new Error('Username is required');
  }

  if (username === 'locked') {
    throw new Error('Account is locked');
  }

  if (typeof password === 'string' && /[^a-zA-Z0-9]/.test(password)) {
    throw new Error('Password contains special characters');
  }

  if (username !== 'admin' || password !== '9999') {
    throw new Error('Invalid username or password');
  }

  return true;
}

module.exports = { login };
// Update login logic
