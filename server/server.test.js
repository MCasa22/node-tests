const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;


describe('Server', () => {
  describe('GET /', () => {
    //res allows access to res.body
    it('should return Hello World reponse', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('GET /Users', () => {
    it('shoud return admin user', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'admin',
            age: 23
          });
        })
        .end(done)
    });
  });

});
