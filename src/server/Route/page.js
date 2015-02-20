var mongoose = require('mongoose');

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : String
});

var MenuSchema = new mongoose.Schema({
                        name: String,
                        pages: [{type: Schema.Types.ObjectId, ref:'Page'}],
                        link : [{type: Schema.Types.ObjectId, ref:'Menu'}]
});

var Page = mongoose.model('Page',PageSchema);
var Menu = mongoose.model('Menu' ,MenuSchema);

exports.create = function(req,res,next){
        var reqBody = req.body,
        pageObj = {title: reqBody.title, content: reqBody.content};

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
        Page.findById(req.id,function(err,doc){
              if(err || !doc) return next(err);
              if(req.body.title != null) 
                    doc.title = req.body.title;
              if(req.body.content != null)
                    doc.content = req.body.content;
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
        Page.findById(req.id, function(err,doc){
             if(err || !doc) return next(err);
             doc.remove();
             res.json(doc);
     });
 
};

