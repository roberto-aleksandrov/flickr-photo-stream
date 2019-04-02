/* eslint-disable */
let app = require( '../server');
import chai from 'chai';
import chaiHttp from 'chai-http';
import { CREATE_USER, ERROR_MESSAGES } from './test-data';
import mongoose from 'mongoose'
import { Mockgoose } from 'mock-mongoose';

chai.use(chaiHttp)

const expect = chai.expect;
const request = chai.request;

describe('Users API Integration Tests', function() {
  before(async function() {
    new Mockgoose(mongoose).prepareStorage();
  });
  afterEach(function (done) {
    mongoose.connection.db.dropDatabase(done)
  });
  describe('#GET / users', function() {
    it('should get all users', function(done) {
        request(app)
        .get('/api/users')
        .end(function(err, res) {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('array');
          expect(res.body).to.be.empty;
          done();
        });
    });
  });
  describe('#POST / user ', function() { 
    it('should create a user', function(done) { 
      request(app).post('/api/users').send(CREATE_USER)
        .end(function(err, res) { 
          expect(res.statusCode).to.equal(200); 
          expect(res.body.email).to.equal(CREATE_USER.email); 
          expect(res.body.givenName).to.equal(CREATE_USER.givenName); 
          expect(res.body.familyName).to.equal(CREATE_USER.familyName); 
  
          done(); 
        }); 
    }); 
    it('should return status code 400', function(done) { 
      request(app).post('/api/users').send(CREATE_USER).end(() => {
        request(app).post('/api/users').send(CREATE_USER)
          .end(function(err, res) { 
            expect(res.statusCode).to.equal(400); 
            expect(res.body.message).to.equal(ERROR_MESSAGES.USER_EXISTS); 
    
            done(); 
        })
      });
    }); 
  }); 
});


