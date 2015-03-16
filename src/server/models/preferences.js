var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var preferencesSchema = new Schema({
	
	apropos: {
		title: String,
		content: String
	},

	site: {
		title: String,
		titlecolor: String,
		subtitle: String,
		subtitlecolor: String,
		backgroundcolor: String,
		bannercolor: String
	},

	links:[{
		text: String,
		url: String
	}]
});
//exports.Preferences= mongoose.model('Preferences', preferencesSchema);
var Preferences = mongoose.model('Preferences', preferencesSchema);

exports.preferencesSchema =preferencesSchema;
exports.Preferences = Preferences;
