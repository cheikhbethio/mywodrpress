var mongoose = require('mongoose');
var user = require('./user.js');
var article = require('./article.js');
var Schema = mongoose.Schema;

var CommentaireSchema = new mongoose.Schema({
	author : {type : Schema.Types.ObjectId, ref:'user'},
	article : {type : Schema.Types.ObjectId, ref:'Artcile'},
	date : Date,
	content : String,
});

var Commentaire = mongoose.model('Commentaire',CommentaireSchema);

exports.commentaire=Commentaire;

exports.create = function(req,res,next){

	  var commentaireObj = {
	  							author: req.body.author, 
		  						article: req.body.article,
		  						date: req.body.date, 
		  						content:req.body.content
	  						};

	  var model = new Commentaire(commentaireObj);
	  model.save(function(err,doc){
	        if(err || !doc){
	        	console.log('eeeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrrreeeeeeeeeeeeeeeeeeuuuuuuuuuuuuuuuuuuuuur')
	        	return next(err);
	        }else{
	        		console.log('gooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooood')
	            	res.json(doc);
	        	}
	       });
               
};


exports.get = function(req,res,next){
	    Commentaire.find({article : req.params.id} ,(function(err,result){
	    	if(err){
	        	return next(err);
	       	}else {
	        	res.json(result);
	        }
	}));
}; 
     


/*
exports.get = function(req,res,next){
	    Commentaire.findById(req.params.id).populate('article').exec(function(err,result){
	    	if(err){
	        	return next(err);
	       	}else {
	        	res.json(result);
	        }
	});
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
*/