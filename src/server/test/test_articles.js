var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var bcrypt=require('bcrypt');
var mydb     = require('../Route/user.js');
//var winston = require('winston');
 
describe('article Routing', function() {
  	var url = 'http://localhost:4711';
/*
 	before(function(done) {
    	mongoose.connect('localhost:27017');
    	done();
  	});*/

	describe('Account Creation', function() {
	  	var myUser;
	  	var createdAcount = {
	        login		: 'kksdsdk',
	    	password	: 'ksdsdskk',
	   	 	firstname	: 'kkdsdk',
	    	lastname	: 'kksdsdk',
	    	email	  	: 'ksdsdskk@kkk.kkk',
	    	right		: 1
	    };
	    it('should return error when Creation failed', function(done) {

		    request(url)
			.post('/api/users')
			.send(createdAcount)
		    // end handles the response
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ '  code de requete retournéé pour la Creation gioffffffffffffffffffffffffffffffffffffff');
		          //res.should.have.status(400);
		          myUser = res.body.result;
		          console.log(myUser);
		          res.should.have.property('status',200);
		          done();
		    });
		});
	 	

	    it('should return error when Creation article failed', function(done) {
		 	var id = myUser._id;
		  	var createdArticle = {
	             title : "myartcile",
	             author : id,
	             date : "10-10-2000",
	             ispublic : true,
	             content : "mycontent",
	             keywords : ["str1", "str2"]
		    };

		    request(url)
			.post('/api/articles')
			.send(createdArticle)
		    // end handles the response
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ '  code de requete retournéé pour la Creation d\'articles');
		          //res.should.have.status(400);
		          myUser = res.body.result;
		       //   console.log(myUser);
		          res.should.have.property('status',200);
		          done();
		        });
	    });
	});
});


/*


app.post('/api/articles', article.create);
app.get('/api/articles/:id', article.get);
app.get('/api/articles', article.view);


*/