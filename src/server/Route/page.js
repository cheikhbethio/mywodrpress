var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : String
});

var ItemSchema = new mongoose.Schema({
                        name: String,
                        items: [{type: Schema.Types.ObjectId, ref:'MenuItem'}]
});

var MenuItemSchema = new mongoose.Schema({
                        pages: [{type: Schema.Types.ObjectId, ref:'Page'}],
                        menu : [{type: Schema.Types.ObjectId, ref:'MenuItem'}]
});

var Page = mongoose.model('Page',PageSchema);
var MenuItem = mongoose.model('MenuItem',MenuItemSchema);
var Item = mongoose.model('Item' ,ItemSchema);

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
        Page.findById(req.params.id,function(err,doc){
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

exports.createItem = function(req,res,next){
       var itemObj = {name : req.body.name};
       var model = new Item(itemObj);
        model.save(function(err,doc){
                       if(err || !doc){
                           return next(err);
                         } else {
                               res.json(doc);       
                        }
            });

};

