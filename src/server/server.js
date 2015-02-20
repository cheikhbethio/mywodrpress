'use strict';

// Module dependencies.
var application_root = __dirname,
    express = require('express'), //Web framework
    path = require('path'), //Utilities for dealing with file paths
    bodyParser  = require('body-parser'),
    mongoose = require('mongoose'), //MongoDB integration
    user = require('./Route/user.js'),
    page = require('./Route/page.js');


//Create server
var app = express();

// Configure server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(application_root ,'../client')));
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

/* POST /api/user/create : 
req: {login: , email, password, lastname, firstname }
res: "message erreur" ou OK*/
app.post('/api/user/create',user.create);

/* POST /api/user/edit : 
req: {login: , password, lastname, firstname }
login correspond au login de l'entrée a modifié 
res: "message erreur" ou OK*/
app.post('/api/user/edit',user.edit);

app.get('/api/users/:id',user.get);

app.get('/api/users',user.view);

app.post('/api/page/create',page.create);

app.post('/api/page/edit', page.edit);

app.post('/api/page/delete', page.deletePage);

app.get('/api/pages/:id', page.getPage);
