var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
//var winston = require('winston');
 
describe('Routing', function() {
  var url = 'http://localhost:4711';
  before(function(done) {
    // In our tests we use the test db
    mongoose.connect('localhost:27017');	
    done();
  });
  describe('Account Creation', function() {
    it('should return error when Creation failed', function(done) {
     	var profile = {
        login		: 'kkk',
    	password	: 'kkk',
   	 	firstname	: 'kkk',
    	lastname	: 'kkk',
    	email	  	: 'kkk@kkk.kkk',
    	right		: 1
      };
    request(url)
	.post('/api/users')
	.send(profile)
    // end handles the response
	.end(function(err, res) {
          if (err) {
            throw err;
          }
          // this is should.js syntax, very clear
          console.log(res.status+ '  code de requete retournéé');
          //res.should.have.status(400);
          res.should.have.property('status',200);
          done();
        });
    });

    describe('Account Creation duplicated', function(){
	    it('should return error trying to save duplicate username', function(done) {
     	var profile = {
	        login		: 'kkk',
	    	password	: 'kkk',
	   	 	firstname	: 'kkk',
	    	lastname	: 'kkk',
	    	email	  	: 'kkk@kkk.kkk',
	    	right		: 1
	      };
		request(url)
		.post('/api/users')
		.send(profile)
	    // end handles the response
		.end(function(err, res) {
	          if (err) {
	            throw err;
	          }
	          // this is should.js syntax, very clear
          console.log(res.status+ '  code de requete retournéé');
          //res.should.have.status(400);
          res.should.have.property('status',401);
          done();
        });
	    });
    });

  });
});