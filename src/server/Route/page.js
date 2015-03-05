var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var article=require('./article.js')

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : [{type: Schema.Types.ObjectId, ref:'Article'}]
});


var Page = mongoose.model('Page',PageSchema);

module.exports.Page = Page;

exports.create = function(req,res,next){
        var reqBody = req.body,
        pageObj = {title: reqBody.title};

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
        Page.findOne({_id: id}).populate('content').exec(function(err,result){
          if(err) return next(err);
          Page.populate(result,{
            path: 'content.author',
            select: 'firstname lastname login',
            model: 'user'
          },function(err,doc){
            if(err) return next(err);
            res.json(doc);
          });
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
  Page.find().populate('content').exec(function (err, result) {
        console.log(result);
        if (err) {
            return next(err);
        } else {
            res.json(result);
        }
    });

};

exports.addarticle = function(req,res,next){
  console.log(req.params.idart);
        Page.findById(req.params.id,function(err,doc){
              if(err) return next(err);
              if(req.params.idart != null) 
                    doc.content.push(req.params.idart);
              doc.save(function(err,result){
                       if(err || !doc){
                          return next(err);
                       } else {
                           res.json(result);
                        }
               });
          });

};

exports.delarticle = function(req,res,next){
        Page.findById(req.params.id,function(err,doc){
              if(err || !doc) return next(err);
              if(req.params.idart != null) 
                    doc.content.splice(doc.content.indexOf(req.params.idart),1);
              doc.save(function(err,result){
                       if(err || !doc){
                          return next(err);
                       } else {
                           res.json(result);
                        }
               });
          });

};


                          
                       

