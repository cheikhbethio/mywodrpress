var mongoose = require('mongoose');
var user = require('./user.js');
var Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema({
                     title : String,
                     author : {type : Schema.Types.ObjectId, ref:'user'},
                     date : Date,
                     ispublic : Boolean,
                     content : String,
                     keywords : [String]
});

var Article = mongoose.model('Article',ArticleSchema);

exports.articles=Article;

exports.create = function(req,res,next){                           
	var articleObj = {title: req.body.title, author: req.body.author, date: req.body.date, ispublic: req.body.ispublic, content:req.body.content, keywords: req.body.keywords};
	var model = new Article(articleObj);
	model.save(function(err,doc){
	 if(err || !doc){
	      return next(err);
	  }else{
	       res.json(doc);
	    }
	});
               
};

exports.get = function(req,res,next){
    Article.findById(req.params.id).populate('author').exec(function(err,result){
        if(err){
          return next(err);
        }else {
          res.json(result);
        }
    });
}; 
        
exports.getByEditor = function(req,res,next){
	    Article.find({author : req.params.id} ,(function(err,result){
	    	if(err){
	        	return next(err);
	       	}else {
	        	res.json(result);
	        }
	}));	
};

exports.view = function(req,res,next){
  Article.find().populate('author').exec((function (err, result) {
        if (err) {
            return next(err);
        } else {
            res.json(result);
        }
    }));

};