var mongoose = require('mongoose');
//var page = require('./page.js');
var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
                        name: String,
                        items: {
                                pages: [{type: Schema.Types.ObjectId, ref:'Page'}],
                                menu : [{type: Schema.Types.ObjectId, ref:'Item'}]
                               }
});
/*var MenuItemSchema = new mongoose.Schema({
                        pages: [{type: Schema.Types.ObjectId, ref:'Page'}],
                        menu : [{type: Schema.Types.ObjectId, ref:'Item'}]
});
var PageSchema = new mongoose.Schema({
                         title : String,
                         content : String
});*/


/*var Page = mongoose.model('Page',PageSchema);*/

//var MenuItem = mongoose.model('MenuItem',MenuItemSchema);
var Item = mongoose.model('Item' ,ItemSchema);

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

exports.getItems = function(req,res,next){
                Item.find().populate('items.pages').populate('items.menu').exec(function(err,result){
                   if(err){
                       return next(err);
                    }else{
                        res.json(result);
                        console.log(result);
                       }
                  });
};

exports.addPageToItem = function(req,res,next){
                     Item.findById(req.params.id, function(err,doc){
                          if(err || !doc){
                              return next(err);
                              }
                           else{
                               console.log(req.body);
                              doc.items.pages.push(req.body._id);
                              doc.save(function(err,result){
                               if(err || !result){
                                  return next(err);
                                }
                               else{
                                  res.json(result);
                                }
                             });
                           }
                        });
};
exports.addMenuToItem = function(req,res,next){
                     Item.findById(req.params.id, function(err,doc){
                          if(err || !doc){
                              return next(err);
                              }
                           else{
                               console.log(req.body);
                              doc.items.menu.push(req.body._id);
                              doc.save(function(err,result){
                               if(err || !result){
                                  return next(err);
                                }
                               else{
                                  res.json(result);
                                }
                             });
                           }
                        });
};

