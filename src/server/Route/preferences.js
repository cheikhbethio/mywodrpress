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
		subtitlecolor: String
	}
});

var Preferences = mongoose.model('Preferences', preferencesSchema);

exports.preferences = Preferences;

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

var default_pref = new Preferences({

	"apropos": {
		"title": "A propos title",
		"content": "A propos subtitle"
	},

	"site": {
		"title": "A title",
		"titlecolor": "#000000",
		"subtitle": "site subtitle",
		"subtitlecolor": "#000000"
	}

});

default_pref.save(function (err, pref) {

	if (err) 
		return console.error(err);

	console.log("Saved: " + pref);

});


exports.get = function(req,res,next){

    Preferences.find(function (err, pref) {
	 	if (err) 
	 		return console.error(err);

	  	res.json(pref[0]);
	});
};

exports.edit = function(req,res,next){
	
	console.log("ID: " + req.body._id);
	console.log("Body: " + JSON.stringify(req.body.site));

	var site = req.body.site;
	var apropos = req.body.apropos;

	Preferences.findByIdAndUpdate(req.body._id,  {site: site, apropos: apropos}, function(err, pref){
		if(err)
			console.log("Error !!");

		res.send(pref);
	});

	

};