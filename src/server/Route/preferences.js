var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var preferencesSchema = new Schema({
	
	apropos: {
		title: String,
		content: String
	},

	site: {
		title: String,
		subtitle: String
	}
});


var Preferences = mongoose.model('Preferences', preferencesSchema);