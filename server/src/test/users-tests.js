/* eslint-disable */
let app = require( '../server');
import chai from 'chai';
import chaiHttp from 'chai-http';
import mongoose from 'mongoose'
import { Mockgoose } from 'mock-mongoose';

import { createUser, ERROR_MESSAGES } from './seed/test-data';
import { seedUsers, seedOne } from './seed/seed-users';

chai.use(chaiHttp)

const expect = chai.expect;
const request = chai.request;

before(function(done) {
  new Mockgoose(mongoose).prepareStorage().then(function() {
      mongoose.connect('InMemoryTestDb', function(err) {
          done(err);
      });
  });
});

describe('Users API Integration Tests', function() {
  afterEach(function (done) {
    mongoose.connection.db.dropDatabase(done)
  });
  describe('#GET / users', function() {
    before(function() {
        seedUsers(10);
    })
    it('should get all users', function(done) {
        request(app)
        .get('/api/users')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.length(10);
          done();
        });
    });
    it('should get users by id', function(done) {
      seedOne().then(user => {
        request(app)
        .get(`/api/users/${user._id}`)
        .end(function(err, res) {
            expect(res.statusCode).to.equal(200); 
            expect(res.body.email).to.equal(user.email); 
            expect(res.body.givenName).to.equal(user.givenName); 
            expect(res.body.familyName).to.equal(user.familyName); 
            done();
        });
      })
    });
    it(`should return status code 400 and message ${ERROR_MESSAGES.USER_IS_MISSING}`, function(done) {
      request(app).get('/api/users/5ca24c02d268160660cb03f2').send(createUser())
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(400); 
          expect(res.body.message).to.equal(ERROR_MESSAGES.USER_IS_MISSING); 

          done(); 
        })
    });  
    it(`should return status code 400 and message ${ERROR_MESSAGES.INVALID_ID_FORMAT}`, function(done) {
      request(app).get('/api/users/5ca24c02d26816003f2').send(createUser())
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(400); 
          expect(res.body.message).to.equal(ERROR_MESSAGES.INVALID_ID_FORMAT); 

          done(); 
        })
    });  
  });
  describe('#POST / user', function() { 
    it('should create a user', function(done) { 
      const user = createUser();
      request(app).post('/api/users').send(user)
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.email).to.equal(user.email); 
          expect(res.body.givenName).to.equal(user.givenName); 
          expect(res.body.familyName).to.equal(user.familyName); 
  
          done(); 
        }); 
    }); 
    it(`should return status code 400 and message ${ERROR_MESSAGES.USER_EXISTS}`, function(done) {
      seedOne().then(user => {
        request(app).post('/api/users').send(user)
          .end(function(err, res) { 
            expect(res.statusCode).to.equal(400); 
            expect(res.body.message).to.equal(ERROR_MESSAGES.USER_EXISTS); 

            done(); 
          })
      });      
    }); 
  }); 
  describe('#PUT / user', function() { 
    it('should update a user', function(done) { 
      seedOne().then(user => {
        user.familyName = 'random test name'
        request(app).put(`/api/users/${user._id}`).send(user)
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.email).to.equal(user.email); 
          expect(res.body.givenName).to.equal(user.givenName); 
          expect(res.body.familyName).to.equal(user.familyName); 
  
          done(); 
        }); 
      })
    }); 
    it(`should return status code 400 and message ${ERROR_MESSAGES.USER_IS_MISSING}`, function(done) {
      request(app).put('/api/users/5ca24c02d268160660cb03f2').send(createUser())
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(400); 
          expect(res.body.message).to.equal(ERROR_MESSAGES.USER_IS_MISSING); 

          done(); 
        })
      });      
    });
    it(`should return status code 400 and message ${ERROR_MESSAGES.INVALID_ID_FORMAT}`, function(done) {
      request(app).put('/api/users/5ca24c02d26816003f2').send(createUser())
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(400); 
          expect(res.body.message).to.equal(ERROR_MESSAGES.INVALID_ID_FORMAT); 

          done(); 
        })
    });  
});


