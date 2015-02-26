'use strict';


var application_root = __dirname;
var path             = require('path');

var express  = require('express');
var mongoose = require('mongoose');

var favicon        = require('serve-favicon');
var logger         = require('morgan');
var methodOverride = require('method-override');
var bodyParser     = require('body-parser');

// Deprecated !!
var session = require('express-session');


var flash        = require('connect-flash');
var cookieParser = require('cookie-parser');


var user     = require('./Route/user.js');
var page     = require('./Route/page.js');
var article  = require('./Route/article.js');
var passport = require('./Route/passport.js');
var menu     = require('./Route/menu.js');


var app = express();

app.use(express.static(path.join(application_root ,'../client')));
//app.use(express.favicon());
app.use(logger('dev'));

app.use(cookieParser()); 
app.use(bodyParser());
app.use(methodOverride());
app.use(session({ secret: 'securedsession' }));

app.use(passport.initialize());
app.use(passport.session());

//app.use(app.router);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var port = 4711;
app.listen(port, function () {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
    console.log('application_root is %s',path.join(application_root ,'../client'));
});


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

app.post('/api/users', user.create);
app.put('/api/users/:id', user.edit);
app.get('/api/users/:id', user.get);
app.get('/api/users', user.view);

/***** Pages ******/


app.post('/api/pages',page.create);
app.put('/api/pages/:id', page.edit);
app.delete('/api/pages/:id', page.deletePage);
app.get('/api/pages/:id', page.getPage);
app.get('/api/pages', page.view);

/***** Articles *****/


app.post('/api/articles', article.create);
app.get('/api/articles/:id', article.get);

/***** Menus *****/

app.post('/api/menus', menu.createItem);
app.get('/api/menus', menu.getItems);
app.post('/api/menus/:id', menu.addPageToItem);
