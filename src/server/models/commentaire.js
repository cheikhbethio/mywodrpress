var mongoose = require('mongoose');
//var user = require('./user.js');
//var article = require('./article.js');
var Schema = mongoose.Schema;
//var modelarticle =article.articles


var CommentaireSchema = new mongoose.Schema({
	author : {type : Schema.Types.ObjectId, ref:'user'},
	article : {type : Schema.Types.ObjectId, ref:'Article'},
	date : Date,
	content : String,
});

module.exports = mongoose.model('Commentaire',CommentaireSchema);