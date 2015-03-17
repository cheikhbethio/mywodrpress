var mongoose = require('mongoose');
//var user = require('./user.js');
//var article = require('./article.js');
var Schema = mongoose.Schema;

var FavorisSchema = new mongoose.Schema({
  title : String,
  author : {type : Schema.Types.ObjectId, ref:'user'},
  article : {type : Schema.Types.ObjectId, ref:'Article'},
  date : Date,
  ispublic : Boolean,
  isHome : Boolean,
  content : String,
  keywords : [String]
});

module.exports= mongoose.model('Favoris',FavorisSchema);