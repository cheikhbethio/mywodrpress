var Menus=require('../models/menu');

exports.getMenus = function(req, res, next){
  Menus.find(function (err, menu) {
    if (err) 
      return console.error(err);

    res.json(menu);
  });
};

exports.postMenu = function(req, res, next){
  var menu= new Menus(req.body);
  menu.save(function(err, menu){
    if(err)
      return res.send(err);
    res.send(menu);

    console.log("Successfully saved the menu !");
  });
};

exports.editMenu = function(req, res, next){
  Menus.findByIdAndUpdate(req.params.id,  req.body, function(err, menu){
    if(err)
      console.log("Error !!");

    res.send(200);
  });

};

exports.deleteMenu = function(req,res,next){
      Menus.findById(req.params.id, function(err,doc){
        if(err || !doc) return next(err);
            doc.remove();
            res.json(doc);
     });
 
};