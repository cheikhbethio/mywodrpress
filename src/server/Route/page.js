var mongoose = require('mongoose');

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : String
});

var Page = mongoose.model('Page',PageSchema);

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

