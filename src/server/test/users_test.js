var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var bcrypt=require('bcrypt');
var mydb     = require('../Route/user.js');
//var winston = require('winston');
 
describe('User Routing', function() {
  	var url = 'http://localhost:4711';
 	
 	before(function(done) {
    	mongoose.connect('localhost:27017');
    	done();
  	});

 	after(function(done) {
    	mongoose.disconnect();
    	done();
  	});

	  
	describe('Account Creation', function() {
	  	var myUser;
	  	var createdAcount = {
	        login		: 'kkk',
	    	password	: 'kkk',
	   	 	firstname	: 'kkk',
	    	lastname	: 'kkk',
	    	email	  	: 'kkk@kkk.kkk',
	    	right		: 1
	    };
	    var updateAccont = {
	    	password	: '1kkk',
	   	 	firstname	: '1kkk',
	    	lastname	: '1kkk',
	    	email	  	: '1kkk@kkk.kkk',
	    };
	    var token;

	    it('should return error when Creation failed', function(done) {

		    request(url)
			.post('/api/users')
			.send(createdAcount)
		    // end handles the response
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ '  code de requete retournéé pour la Creation');
		          //res.should.have.status(400);
		          myUser = res.body.result;
		       //   console.log(myUser);
		          res.should.have.property('status',200);
		          done();
		        });
	    });

		//for duplicate accont
	    it('should return error trying to save duplicate username', function(done) {
		request(url)
		.post('/api/users')
		.send(createdAcount)
		.end(function(err, res) {
	          if (err) {
	            throw err;
	          }
	        console.log(res.status+ '  code de requete pour tests de duplicate');
		    res.should.have.property('status',401);
	      	done();
	    });
	    });

	    //get token	    
	    it('return error when get token failed', function(done) {
			var newUserUpdated;
			request(url)
			.post('/api/token')
			.send(createdAcount)
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          token=res.body.token;
		        console.log(token);
	          	res.should.have.property('status',200);
	          	done();
	        });
	    });

	    //edit a profile Mail only	    
	    it('return error when edition mail only failed', function(done) {
		    var updateAccontMail = {
		    	email	  	: 'onlymail@kkk.kkk',
		    };
			var newUserUpdated;
			request(url)
			.put('/api/users/'+myUser._id)
			.set('x-access-token',token)
			.send(updateAccontMail)
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
	        	newUserUpdated = res.body.result; 
	      		//console.log(newUserUpdated);
	        	newUserUpdated.email.should.equal('onlymail@kkk.kkk');
	          	res.should.have.property('status',200);
	          	done();
	        });
	    });

	    //edit a profile without token    
	    it('return error when edition password succed without token', function(done) {
		    var updateAccontPass = {
		    	password	  	: 'newPassword',
		    };
			var newUserUpdated;
			request(url)
			.put('/api/users/'+myUser._id)
			.send(updateAccontPass)
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
	          	res.should.have.property('status',404);
	          	done();
	        });
	    });

	    /*/edit a profile password firstname and las name	    
	    it('return error when edition password only failed', function(done) {
		    var updateAccontPass = {
		    	firstname	  	: 'newfirstname',
		    	lastname	: "newlastname"
		    };
			var newUserUpdated;
			request(url)
			.put('/api/users/'+myUser._id)
			.send(updateAccontPass)
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
	          	console.log(res.status+ '  code de requete pour le update Mail');
	        	newUserUpdated = res.body.result; 
	        	newUserUpdated.firstname.should.equal('newfirstname');
	        	newUserUpdated.lastname.should.equal('newlastname');
	          	res.should.have.property('status',200);
	          	done();
	        });
	    });//*/

	    //view profile
	    it('should return error we cannot see the user profile', function(done) {
			request(url)
			.get('/api/users/'+myUser._id)
			.send()
		    // end handles the response
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
	          	console.log(res.status+ '  code de requete pour voir le profile d\'un user');
		      res.should.have.property('status',200);
		      done();
		    });
		});

	     //view all users profiles
		it('return error we cannot see all users profiles', function(done) {
			request(url)
			.get('/api/users')
			.send()
		    // end handles the response
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
	          	console.log(res.status+ '  code de requete pour voir tous les profiles ');
	          res.should.have.property('status',200);
	          done();
	        });
		});

	});
});




