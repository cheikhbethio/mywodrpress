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


app.post('/api/login', passport.authenticate('local-login'), function(req, res) {
	console.log(req.session.passport.user.roles);
	res.cookie('userid', req.user.right, { maxAge: 2592000000 });
	  res.send(req.user);
});
app.post('/api/logout',  function(req, res){
	req.logOut();
	res.send(200);
});

///

/***** Users ******/

/* Create a user */
app.post('/api/users', user.create);

/* Update a user */
app.put('/api/users/:id', user.edit);

/* Get a user */
app.get('/api/users/:id', user.get);

/* Get all users */
app.get('/api/users', user.view);


/***** Pages ******/

/* Create a page */
app.post('/api/pages',page.create);

/* Update a page */
app.put('/api/pages/:id', page.edit);

/* Delete a page */
app.delete('/api/pages/:id', page.deletePage);

/* Get a page */
app.get('/api/pages/:id', page.getPage);

/* Get all pages */
app.get('/api/pages', page.view);
