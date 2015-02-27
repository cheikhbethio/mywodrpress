var user=require('./user.js');
var jwt=require('jwt-simple');
var moment=require('moment');
var mongoose=require('mongoose')
var secret_Token;
var modelUser=user.users;
moment.format();





//obtenir un token suite a iddentification;
module.exports.login=function(req,res,next){
var login=req.body.login;
var password=req.body.password;

modelUser({login: login},function(err, doc){

	if(err){
		res.sendStatus(404,err.message);
		next();
	}
	else if(!doc){
		res.sendStatus(401,"User not Found");
		next();
	}
	else{
		var expires=moment().add('hours',2);
		var token = jwt.encode({
			iss: user.id,
			exp: expires
		}, secret_Token);
		res.send({token : token, expires : expires});

	}
}
