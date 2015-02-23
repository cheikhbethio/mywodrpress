'use strict';

// Module dependencies.
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths
    bodyParser  = require('body-parser'),
    mongoose = require('mongoose'), //MongoDB integration
    user = require('./Route/user.js'),
    page = require('./Route/page.js');

    //miiddleware connection ::: Moussa
		var express = require('express');
		var passport = require('./Route/passport.js');
		
		var flash    = require('connect-flash');
		var cookieParser = require('cookie-parser');
		var session      = require('express-session');
	// fin 

//Create server
var app = express();

// Configure server
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static(path.join(application_root ,'../client')));
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.cookieParser()); 
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.session({ secret: 'securedsession' }));
	app.use(passport.initialize()); // Add passport initialization
	app.use(passport.session());    // Add passport initialization
	app.use(app.router);
//

//Show all errors in development
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));


//Start server
var port = 4711;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
    console.log('application_root is %s',path.join(application_root ,'../client'));
});



//Connect to database
var db = mongoose.connect('mongodb://localhost/myWP');


	app.post('/connection', passport.authenticate('local-login'), function(req, res) {
	  console.log(req.user);
	  res.send(req.user);
	});
	app.post('/logout',  function(req, res){
		req.logOut();
		res.send(200);
	})

///




/* POST /api/user/create : 
req: {login: , email, password, lastname, firstname }
res: "message erreur" ou OK*/
app.post('/api/user/create',user.create);

/* POST /api/user/edit : 
req: {login: , password, lastname, firstname }
login correspond au login de l'entrée a modifié 
res: {error : %nb} 0 : pas d'erreur , 1 : email utilisé, 2 : login utilisé*/
app.post('/api/user/edit',user.edit);

app.get('/api/users/:id',user.get);

app.get('/api/users',user.view);

app.post('/api/page/create',page.create);

app.post('/api/page/edit', page.edit);

app.post('/api/page/delete', page.deletePage);

app.get('/api/pages/:id', page.getPage);

app.get('/api/pages', page.view);