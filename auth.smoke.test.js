const { login } = require('./auth');

test('đăng nhập thành công với admin/123', () => {
  expect(login('admin', '123')).toBe(true);
});
