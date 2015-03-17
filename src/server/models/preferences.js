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

var Preferences=mongoose.model('Preferences', preferencesSchema);


  preferencesSchema.pre("save", function(next) {
   var self = this;
   console.log("pre save: ");
   Preferences.find(function (err, pref) {
	  if (err) 
	  	return console.error(err);

	  if(pref.length > 0){
	  	var err = new Error('Not saving, preferences already set !');
  		 next(err);
	  }
	  
	  next();

	});
   
});

module.exports= mongoose.model('Preferences', preferencesSchema);


