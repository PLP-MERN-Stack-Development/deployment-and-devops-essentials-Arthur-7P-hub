const jwt = require('jsonwebtoken');
const { protect } = require('../../src/middleware/authMiddleware');

describe('Auth Middleware', () => {
  it('should call next() if token is valid', () => {
    const user = { id: '12345' };
    const token = jwt.sign(user, 'testsecret');

    const req = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    const res = {};
    const next = jest.fn();

    protect(req, res, next);

    expect(next).toHaveBeenCalled();
  });

  it('should return 401 if no token provided', () => {
    const req = { headers: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    protect(req, res, next);

    expect(res.status).toHaveBeenCalledWith(401);
  });
});
