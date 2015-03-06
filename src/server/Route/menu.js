var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new mongoose.Schema({
  name: String,
  single: Boolean,
  page: {type: Schema.Types.ObjectId, ref:'Page'},
  dropdown: [{type: Schema.Types.ObjectId, ref:'Page'}]
});

var Menus = mongoose.model('Menus', MenuSchema);

exports.menus = Menus;

exports.getMenus = function(req, res, next){
  Menus.find(function (err, menu) {
    if (err) 
      return console.error(err);

    res.json(menu);
  });
};

exports.postMenu = function(req, res, next){
  Menus.save(function(err, menu){
    if(err)
      return console.error(err);

    console.log("Successfully saved the menu !");
  });
};

exports.editMenu = function(req, res, next){
  
  console.log("ID: " + req.body._id);

  Menus.findByIdAndUpdate(req.body._id,  req.body, function(err, menu){
    if(err)
      console.log("Error !!");

    res.send(200);
  });

};

