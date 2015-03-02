var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
var bcrypt=require('bcrypt');
var mydb     = require('../Route/user.js');
 
describe('Commentaire Routing', function() {
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
	  	var myArticle;
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
		          console.log(res.status+ ': code retourné pour la création de compte');
		          myUser = res.body.result;
		          console.log(myUser);
		          res.should.have.property('status',200);
		          done();
		    });
		});
	 	
	// article creation
	    it('should return error when article Creation failed', function(done) {
		 	var id = myUser._id;
		  	var createdArticle = {
	             title : "myArticle",
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
		          myArticle = res.body;
		          console.log(myArticle);
		          console.log(res.status+ ': code retourné pour la Creation d\'articles ');
		          res.should.have.property('status',200);
		          done();
		    });
	    });

	 	
	// first comment creation
	    it('should return error when 1° comment creation failed', function(done) {
		 	var id_user = myUser._id;
		 	var	id_article = myArticle._id;
		  	var createdComment1 = {
	            author : id_user,
				article : id_article,
	            date : '2000-10-10T00:00:00.000Z',
	            content : "mycontent",
		    };

		    request(url)
			.post('/api/comments')
			.send(createdComment1)
			.end(function(err, res) {
		        if (err) {
		           throw err;
		        }
		        myComment = res.body;
		        console.log(myComment);
           		res.body.author.should.equal(id_user);
           		res.body.article.should.equal(id_article);
           		res.body.date.should.equal('2000-10-10T00:00:00.000Z');
           		res.body.content.should.equal("mycontent");

		        console.log(res.status+ ': code retourné pour la Creation de commentaire ');
		        res.should.have.property('status',200);
		        done();
		    });
	    });

	 	
	//second comment creation
	    it('should return error when 2° comment creation failed', function(done) {
		 	var id_user = myUser._id;
		 	var	id_article = myArticle._id;
		  	var createdComment2 = {
	            author : id_user,
				article : id_article,
	            date : '2000-10-10T00:00:00.000Z',
	            content : "mycontentxxxxxxxxxxxxxxxxxxxxxxxx",
		    };

		    request(url)
			.post('/api/comments')
			.send(createdComment2)
			.end(function(err, res) {
		        if (err) {
		           throw err;
		        }
		        myCommentToDelete = res.body;
		        console.log(myCommentToDelete);
           		res.body.author.should.equal(id_user);
           		res.body.article.should.equal(id_article);
           		res.body.date.should.equal('2000-10-10T00:00:00.000Z');
           		res.body.content.should.equal("mycontentxxxxxxxxxxxxxxxxxxxxxxxx");

		        console.log(res.status+ ': code retourné pour la Creation de commentaire ');
		        res.should.have.property('status',200);
		        done();
		    });
	    });

	//delete one article
	    it('should return error when Creation article failed', function(done) {
	    	var id_comment = myCommentToDelete._id;
		    request(url)
			.delete('/api/comments/' + id_comment)
			.send()
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		          console.log(res.status + ': code retourné pour la supression d\'un article');
		          res.should.have.property('status',200);
		          done();
		    });
	    });


	    


	//view all comments for one article
	    it('should return error view comments failed', function(done) {
		 	var id_article = myArticle._id;
		 	console.log(id_article);
		    request(url)
			.get('/api/comments/'+ id_article)
			.send()
			.end(function(err, res) {
		          if (err) {
		            throw err;
		          }
		        myComment = res.body;
		        console.log(myComment);
		        console.log(res.status+ ': code retourné pour la vue d\'un commentaire');
		        res.should.have.property('status',200);
		        done();
		    });
	    });
	});
});
