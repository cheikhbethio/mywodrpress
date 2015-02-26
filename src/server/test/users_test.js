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
  /*
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
          res.should.have.property('status',401);
          done();
        });
    });
});

    describe('Account Creation duplicated', function(){
	    it('should return error trying to save duplicate username', function(done) {
     	var profile = {
	        login		: 'k1k',
	    	password	: 'kkk',
	   	 	firstname	: 'kkk',
	    	lastname	: 'kkk',
	    	email	  	: 'k1k@kkk.kkk',
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
    });*/

     describe('Editing profile', function(){
	    it('should return error when saving edition failed', function(done) {
     	var profile = {
     	email	  	: 'k8k@kkk.kkk',
	    	lastname	: '465kk'
	      };
		request(url)
		.put('/api/users/54ef19fe5d03aa647cb9e483')
		.send(profile)
	    // end handles the response
		.end(function(err, res) {
	          if (err) {
	            throw err;
	          }
	          // this is should.js syntax, very clear
          console.log(res.body);
          //res.should.have.status(400);
          res.should.have.property('status',200);
          done();
        });
	    });
    });   

   /*  //view a user profile
     describe('View profile', function(){
	    it('should return error we cannot see the user profile', function(done) {
     	var profile = {
     		_id			:'54eefae54483978f5fcd8b78',
	        login		: 'k1k',
	    	password	: 'kkk',
	   	 	firstname	: 'k44k',
	    	lastname	: 'kkk',
	    	email	  	: 'kkk@kkk.kkk',
	    	right		: 1
	      };
		request(url)
		.get('/api/users/54eefae54483978f5fcd8b78')
		.send(profile)
	    // end handles the response
		.end(function(err, res) {
	          if (err) {
	            throw err;
	          }
	          // this is should.js syntax, very clear
          console.log(res.body);
          //res.should.have.status(400);
          res.should.have.property('status',200);
          done();
        });
	    });
    });   */

     //view all users profiles
     describe('View all users profiles', function(){
	    it('should return error we cannot see all users profiles', function(done) {
		request(url)
		.get('/api/users')
		.send()
	    // end handles the response
		.end(function(err, res) {
	          if (err) {
	            throw err;
	          }
	          // this is should.js syntax, very clear
          console.log(res.body);
          //res.should.have.status(400);
          res.should.have.property('status',200);
          done();
        });
	    });
    });  




  });






/*

app.post('/api/users', user.create);
app.put('/api/users/:id', user.edit);
app.get('/api/users/:id', user.get);
app.get('/api/users', user.view);

*/
