const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

describe('Server', () => {
  describe('GET / (Root route)', () => {
    it('should return hello world response', done => {
      request(app)
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
    });
  });

  describe('GET /users (Users routes)', () => {
    it('should return my user object', done => {
      request(app)
        .get('/users')
        .expect(200)
        .expect(res => {
          expect(res.body).toInclude({ name: 'Wendell', age: 24});
        })
        .end(done);
    });
  });
});
