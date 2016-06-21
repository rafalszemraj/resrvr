var should = require('should');
var supertest = require('supertest');

var server = supertest.agent('http://localhost:3000');
var NOT_FOUND = '{"error":{"status":404,"name":"NotFoundError"}}';
var NOT_AUTHORIZED = '{"error":{"status":401,"name":"UnauthorizedError"}}';

describe('login API test', function() {

  it('should get 404 on no request body', function(done) {

    server
      .post('/login')
      .expect("Content-type", /json/)
      .expect(404)
      .expect(NOT_FOUND, done)

  })

  it("should return 404 on invalid login", function(done) {

    server
      .post("/login")
      .send({
        login: "stan@southpark.comX",
        password: "wendy"
      })
      .expect("Content-type", /json/)
      .expect(404)
      .expect(NOT_FOUND, done)
  })

  it("should return 401 on invalid password", function(done) {

    server
      .post("/login")
      .send({
        login: "stan@southpark.com",
        password: "wendyX"
      })
      .expect("Content-type", /json/)
      .expect(401)
      .expect(NOT_AUTHORIZED, done)
  })

  it("should return token on valid login/password", function(done) {

    server
      .post("/login")
      .send({
        login: "stan@southpark.com",
        password: "wendy"
      })
      .expect("Content-type", /json/)
      .expect(200)
      .expect(function(res) {

        res.body.token.should.not.be.null;

      })
      .end(done)
  })

})