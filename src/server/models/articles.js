var mongoose = require('mongoose');
//var user = require('./user.js');
var Schema = mongoose.Schema;

var ArticleSchema = new mongoose.Schema({
                     title : String,
                     author : {type : Schema.Types.ObjectId, ref:'user'},
                     date : Date,
                     ispublic : Boolean,
                     isHome : Boolean,
                     content : String,
                     keywords : [String],
                     nbrComment: Number
});

module.exports = mongoose.model('Article',ArticleSchema);