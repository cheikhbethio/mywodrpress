var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = Schema({
    login		: String,
    password	: String,
    firstname	: String,
    lastname	: String,
    email	  	: String,
    token   	: String,
    right		: Number
});

/*var user= mongoose.model('user', userSchema);
exports.user = user;
exports.userSchema = userSchema;*/

module.exports = mongoose.model('user', userSchema);