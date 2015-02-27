var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var article=require('./article.js')

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : [{type: Schema.Types.ObjectId, ref:'article.articles'}]
});


var Page = mongoose.model('Page',PageSchema);

module.exports.Page = Page;

exports.create = function(req,res,next){
        var reqBody = req.body,
        pageObj = {title: reqBody.title, content: []};

        var model = new Page(pageObj);
        model.save(function(err,doc){
                       if(err || !doc){
                           return next(err);
                         } else {
                               res.json(doc);
                        }
            });
};

exports.getPage = function(req,res,next){
        var id = req.params.id;
        Page.findById(id, function(err,result){
                     if(err) return next(err);
                    res.json(result);
    });
};

exports.edit = function(req,res,next){
        Page.findById(req.params.id,function(err,doc){
              if(err || !doc) return next(err);
              if(req.body.title != null) 
                    doc.title = req.body.title;
              doc.save(function(err,result){
                       if(err || !doc){
                          return next(err);
                       } else {
                           res.json(result);
                        }
               });
          });

};

exports.deletePage = function(req,res,next){
        Page.findById(req.params.id, function(err,doc){
             if(err || !doc) return next(err);
             doc.remove();
             res.json(doc);
     });
 
};

exports.view = function(req,res,next){
  Page.find(function (err, result) {
        if (err) {
            return next(err);
        } else {
            res.json(result);
        }
    });

};

exports.addarticle = function(req,res,next){
        Page.findById(req.params.id,function(err,doc){
              if(err || !doc) return next(err);
              if(req.body.articleid != null) 
                    doc.content.push(req.body.articleid);
              doc.save(function(err,result){
                       if(err || !doc){
                          return next(err);
                       } else {
                           res.json(result);
                        }
               });
          });

};


                          
                       

