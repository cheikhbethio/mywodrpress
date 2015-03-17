var Favoris=require('../models/favoris_article');
exports.favoris=Favoris;

exports.create = function(req,res,next){                           
	var favorisObj = {article : req.body.article, title: req.body.title, author: req.body.author, date: req.body.date, ispublic: req.body.ispublic, content:req.body.content, keywords: req.body.keywords};
	var model = new Favoris(favorisObj);
	model.save(function(err,doc){
	 if(err || !doc){
	      return next(err);
	  }else{
	       res.json(doc);
	    }
	});
               
};
/*
exports.get = function(req,res,next){   
	Commentaire.find({article : req.params.id}).populate('author').exec(function(err,result){
		   	if(err){
		       	return next(err);
	    	}else {
	    		//console.log('this is our test comment acount ..................................'+result.length);
	        	res.json(result);
	        }
		});
}
*/

exports.get = function(req,res,next){
    Favoris.findById(req.params.id).populate('article').exec(function(err,result){
        if(err){
          return next(err);
        }else {
          res.json(result);
        }
    });
}; 
exports.view = function(req,res,next){
  Favoris.find({author :req.params.id}).populate('article').exec(function (err, result) {
        if (err) {
            return next(err);
        } else {
            res.json(result);
        }
    });

};



/*
exports.get = function(req,res,next){
	Favoris.findById(req.params.id ,(function(err,result){
	   	if(err){
	       	return next(err);
    	}else {
        	res.json(result);
        }
	}));
}; 

exports.view = function(req,res,next){
  Favoris.find({author : req.params.id}, (function (err, result) {
        if (err) {
            return next(err);
        } else {
            res.json(result);
        }
    }));
};
*/

exports.deleteFavoris = function(req,res,next){
    Favoris.findById(req.params.id, function(err,doc){
        if(err || !doc) return next(err);
        doc.remove();
        res.json(doc);
     });
 
};




exports.getNbFavoris = function(req,res,next){   
  Favoris.find({author : req.params.id} ,(function(err,result){
        if(err){
            return next(err);
        }else {
          console.log('this is our test Favoriss acount .............. '+ result.length);
            var resultat =  result.length
            console.log(resultat);
            res.json(resultat);
          }
    }));
}