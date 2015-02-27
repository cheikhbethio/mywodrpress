var should = require('should'); 
var assert = require('assert');
var request = require('supertest');  
var mongoose = require('mongoose');
/*
describe('Routing', function() {
  var url = 'http://localhost:4711';
 --before(function(done) {
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
  });--

describe('Create a new menu', function(){
        var resBody;
       it('should create a new menu', function(done){
         var menu = {name: 'Menu de test', items: []};
          request(url)
        .post('/api/menus')
        .send(menu)
        .expect(200)
        .end(function(err,res){
         should.not.exist(err);
         console.log(res.body);
         resBody = res.body;
         done();
      });
   });
  it('should add page to a menu', function(done){
      var page = {title: 'test', content: 'Ceci est un test',pageId: '54ef39793f8dac1713838a83'};
      var id = resBody._id;
      request(url)
      .post('/api/menus/'+id)
      .send(page)
      .expect(200)
     .end(function(err, res){
       should.not.exist(err);
         //res.body.title.should.equal('modification du titre');
         //res.body.content.should.equal('test de la modification du contenu');
         done()
      });
  });
});
describe('Get all menus', function(){
        it('should return liste de tous les menus',function(done){
          request(url)
          .get('/api/menus')
          .set('Accept','application/json')
          .expect(200)
          .end(function(err,res){
           should.not.exist(err);
           res.body.should.be.an.instanceOf(Array);
            console.log(res.body);
          done();
        });
      });
});
});
      
*/