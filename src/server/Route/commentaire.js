var Commentaire=require('../models/commentaire');

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
	        	console.log('error for saving comment')
	        	return next(err);
	        }else{
	        		article.updateNbrComment(req.body.article);
	        		console.log('succes for saving comment')
	            	res.json(doc);
	        	}
	       });
               
};

/*
exports.get = function(req,res,next){
	Commentaire.find({article : req.params.id} ,(function(err,result){
	   	if(err){
	       	return next(err);
    	}else {
        	res.json(result);
        }
	}));
}; 
   */
exports.get = function(req,res,next){   
	Commentaire.find({article : req.params.id}).populate('author').exec(function(err,result){
		   	if(err){
		       	return next(err);
	    	}else {
	    		//console.log('this is our test comment acount '+result.length);
	        	res.json(result);
	        }
		});
}

exports.getNbcomment = function(req,res,next){   
	Commentaire.find({author : req.params.id} ,(function(err,result){
		   	if(err){
		       	return next(err);
	    	}else {
	    		console.log('this is our test comment acount .............. '+ result.length);
	        	var resultat =  result.length
	        	console.log(resultat);
	        	res.json({aaa : resultat});
	        }
		}));
}

exports.getNbcommentForAticle = function(req,res,next){   
	Commentaire.find({article : req.params.id} ,(function(err,result){
		   	if(err){
		       	return next(err);
	    	}else {
	    		console.log('this is our test comment acount .............. '+ result.length);
	        	var resultat =  result.length
	        	console.log(resultat);
	        	res.json({aaa : resultat});
	        }
		}));
}
exports.getNbcommentByArticle = function(req,res,next){   
	Commentaire.find({article : req.params.id} ,(function(err,result){
		   	if(err){
		       	return next(err);
	    	}else {
	    		console.log('this is our test comment acount .............. '+ result.length);
	        	var resultat =  result.length
	        	console.log(resultat);
	        	res.json(resultat);
	        }
		}));
}

exports.deleteComment =function(req, res, next){
    Commentaire.findById(req.params.id, function(err,doc){
        if(err || !doc) return next(err);
        doc.remove();
        res.json(doc);
    });
};  

exports.getLastComments = function(req,res,next){
	      Commentaire.find({$query:{} ,$orderby:{date: -1}}).populate('author').populate('article').limit(3).exec(function(err,results){
	      	   if(err){
	      	   	    return next(err);
	      	   } else {
	      	   	    res.json(results);
	      	   }
	      });
};  
exports.getByEditor = function(req,res,next){
	Commentaire.find({author : req.params.id}).populate('author','firstname lastname').populate('article','title').exec(function(err,result){
		if(err){
			return next(err);
		}else{
			res.json(result);
		}
	});
}