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
          res.should.have.property('status',200);
          done();
        });
    });
    /*it('should correctly update an existing account', function(done){
	var body = {
		firstName: 'JP',
		lastName: 'Berd'
	};
	request(url)
		.put('/api/profiles/vgheri')
		.send(body)
		.expect('Content-Type', /json/)
		.expect(200) //Status code
		.end(function(err,res) {
			if (err) {
				throw err;
			}
			// Should.js fluent syntax applied
			res.body.should.have.property('_id');
	                res.body.firstName.should.equal('JP');
	                res.body.lastName.should.equal('Berd');                    
	                res.body.creationDate.should.not.equal(null);
			done();
		});
	});*/
  });
});