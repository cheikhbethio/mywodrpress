var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');

 

/*
describe('Routing', function() {
  var url = 'http://localhost:4711';
  before(function(done) {
    // In our tests we use the test db
    function clearDB() {
   for (var i in mongoose.connection.collections) {
     mongoose.connection.collections[i].remove(function() {});
   }
   return done();
 }
    mongoose.connect('localhost:27017');	
    clearDB();
    done();
  });

describe('Create a new Page',function(){
         var resBody;
        it('should create a new page', function(done){
        var page = {title: "test", content: "Ceci est un test"};
        request(url)
        .post('/api/pages')
        .send(page)
        .expect(200)
        .end(function(err,res){
         should.not.exist(err);
         resBody = res.body;
         console.log(res.body);
         done();
      });
 });
   it('should create another new page', function(done){
        var page = {title: "un autre test", content: "Ceci est un autre test"};
        request(url)
        .post('/api/pages')
        .send(page)
        .expect(200)
        .end(function(err,res){
         should.not.exist(err);
         console.log(res.body);
         done();
      });
 });
  it('should update an existing page', function(done){
     var body = {title: "modification du titre", content: "test de la modification du contenu"};
     var id = resBody._id;
     request(url)
     .put('/api/pages/'+id)
     .send(body)
     .expect(200)
     .end(function(err, res){
       should.not.exist(err);
         res.body.title.should.equal('modification du titre');
         res.body.content.should.equal('test de la modification du contenu');
         done();
      
    });
  });
 it('should delete an existing page', function(done){
  var id = resBody._id;
  request(url)
  .delete('/api/pages/'+id)
  .expect(200)
  .end(function(err,res){
   should.not.exist(err);
   console.log(res.body);
   done();
       
});
});
});

  
describe('Get Pages', function(){
         it('should return liste de toutes les pages',function(done){
          request(url)
          .get('/api/pages')
          .set('Accept','application/json')
          .expect(200)
          .end(function(err,res){
           should.not.exist(err);
           res.body.should.be.an.instanceOf(Array);
            console.log(res.body);
           res.body[0].title.should.equal("un autre test");
           res.body[0].content.should.equal("Ceci est un autre test");
          done();
        });
      });
});
});
*/