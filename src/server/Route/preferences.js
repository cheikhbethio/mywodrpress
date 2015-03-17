
var Preferences = require('../models/preferences');

    

var default_pref = new Preferences({

	"apropos": {
		"title": "A propos title",
		"content": "A propos subtitle"
	},

	"site": {
		"title": "A title",
		"titlecolor": "#428bca",
		"subtitle": "site subtitle",
		"subtitlecolor": "#000000",

		"backgroundcolor": "#ffffff",
		"bannercolor": "#428bca"
	},

	"links": [{
		"text": "GitHub",
		"url": "https://github.com/"
	},

	{
		"text": "Twitter",
		"url": "https://twitter.com/"
	},

	{
		"text": "Facebook",
		"url": "https://facebook.com/"
	}]
	
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
	var links = req.body.links;

	Preferences.findByIdAndUpdate(req.body._id,  {site: site, apropos: apropos, links: links}, function(err, pref){
		if(err)
			console.log("Error !!");

		res.send(pref);
	});

	

};