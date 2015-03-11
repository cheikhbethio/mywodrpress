/*var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var bcrypt=require('bcrypt');
var mydb     = require('../Route/user.js');
//var winston = require('winston');
 
describe('article Routing', function() {
  	var url = 'http://localhost:4711';

 	before(function(done) {
    	mongoose.connect('localhost:27017');
    	done();
  	});

  	after(function(done){
  		mongoose.disconnect();
  		done();
  	});

	describe('Account Creation', function() {
	  	var myUser;
	  	var myArtcile;
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
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ ': code retourné pour la création de compte pour test la creation d\'un article');
		          myUser = res.body.result;
		          console.log(myUser);
		          res.should.have.property('status',200);
		          done();
		    });
		});
	 	
	// article creation
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
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          myArtcile = res.body;
		          console.log(myArtcile);
		          console.log(res.status+ ': code retourné pour la Creation d\'articles ');
		          res.should.have.property('status',200);
		          done();
		    });
	    });

	//duplicated article
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
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ ': code retourné pour la Creation d\'articles dupliqués');
		          res.should.have.property('status',200);
		          done();
		    });
	    });

	//view one article
	    it('should return error when Creation article failed', function(done) {
		 	var id_articles = myArtcile._id;
		    request(url)
			.get('/api/articles/'+ id_articles)
			.send()
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ ': code retourné pour la vue d\'un article');
		          res.should.have.property('status',200);
		          done();
		    });
	    });

	//view all articles
	    it('should return error when Creation article failed', function(done) {
		    request(url)
			.get('/api/articles')
			.send()
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ ': code retourné pour la vue de tous les articles');
		          res.should.have.property('status',200);
		          done();
		    });
	    });

	//view all articles by author
	    it('should return error when Creation article failed', function(done) {
	    	var id_author = myArtcile.author;
		    request(url)
			.get('/api/articles_editor/' + id_author)
			.send()
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status+ ': code retourné pour la vue de tous les articles');
		          res.should.have.property('status',200);
		          done();
		    });
	    });
	});
});
*/