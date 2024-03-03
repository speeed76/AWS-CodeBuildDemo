const request = require('supertest');
const http = require('http');
const app = require('../app');

describe('Server', function () {
  let server;

  // Start the server before the tests
  before(function (done) {
    server = http.createServer(app).listen(0, done);
  });

  // Stop the server after the tests
  after(function (done) {
    server.close(done);
  });

  it('should display "Hello World" when GET /', function (done) {
    request(server)
      .get('/')
      .expect(200, '<h2>Hello World</h2>', done);
  });
});
