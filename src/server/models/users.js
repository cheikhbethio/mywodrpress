var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;

var userSchema = Schema({
    login		: String,
    password	: String,
    firstname	: String,
    lastname	: String,
    email	  	: String,
    right		: Number
});

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);