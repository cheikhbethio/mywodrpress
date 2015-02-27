var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');


describe('Test Pages', function() {
	var url = 'http://localhost:4711';
		before(function(done) {
	    // In our tests we use the test db
	 	mongoose.connect('localhost:27017');	
	    done();
	});
		//Page Creation
	/*describe('Page Creation', function() {
		it('should return error when Creation failed', function(done) {
	     	var profile = {
	         	title : 'testPage',
	         	content : 'testPageContenue'
	      	};
		    request(url)
			.post('/api/pages')
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
	});
		//View one Page
	describe('Page View', function() {
		it('should return error when view failed', function(done) {
		    request(url)
			.get('/api/pages/54ef09429830021013aec9e8')
			.send()
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
	});
		//View all Pages
	describe('View all pages', function() {
		it('should return error when view failed', function(done) {
		    request(url)
			.get('/api/pages')
			.send()
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
	});*/
		//PView all Pages
	describe('Editing pages', function() {
		it('should return error when edition failed', function(done) {
	     	var profile = {
	         	title : 'testEditionPage',
	         	content : 'testEditionPage'
	      	};
		    request(url)
			.put('/api/pages/54ef09429830021013aec9e8')
			.send()
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
	});





})
  

/*
app.post('/api/pages',page.create);
app.put('/api/pages/:id', page.edit);
app.delete('/api/pages/:id', page.deletePage);
app.get('/api/pages/:id', page.getPage);
app.get('/api/pages', page.view);

*/

