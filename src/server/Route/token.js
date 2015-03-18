var user=require('./user.js');
var jwt=require('jwt-simple');
var moment=require('moment');
var mongoose=require('mongoose')
var secret_Token="testsecret";
var modelUser=user.users;
//moment.format();





//obtenir un token suite a iddentification;
exports.gettoken=function(req,res,next){
	var login=req.body.login;
	var password=req.body.password;
	modelUser.findOne({login: login},function(err, doc){
		if(err){
			res.sendStatus(404,err.message);
			next();
		}
		else if(!doc){
			res.sendStatus(401,"User not Found");
			next();
		}
		else if(!doc.validPassword(password)){
			res.sendStatus(402,"Password not Match");
			next();
		}
		else{
			var expires=moment().add(2,'hours');
			var token = jwt.encode({
				iss: doc.id,
				exp: expires
			}, secret_Token);
			res.status(200);
			res.send({token : token, expires : expires});
		}
	});
};

exports.authedit=function(req,res,next){
	var token = req.headers['x-access-token'];

	if (token) {
  		try {
	    	var decoded = jwt.decode(token, secret_Token);
	    	console.log(decoded)
    	 	if (decoded.exp <= Date.now()) {
    	 		res.status(400);
    	 		console.log("token expired");
  				res.end('Access token has expired');
			}  else if(decoded.iss !=req.params.id) {
				res.status(401);
				res.end("Access token isn't valid");

			}	else{
				next();
			}

 
 	 	} catch (err) {
    		return next();
  		}
	} else {
		res.status(401);
  		res.end('Token not received')
		}
};



exports.authmember=function(req,res,next){
	var token = req.headers['x-access-token'];

	if (token) {
  		try {
  			
	    	var decoded = jwt.decode(token, secret_Token);
    	 	if (decoded.exp <= Date.now()) {
    	 		res.status(400);
  				res.end('Access token has expired');
			}
			else{
				modelUser.findById(decoded.iss,function (err, doc){
					if(err) next(err);
					else {
						if(!doc){
							res.status(401);
							res.end("Access token isn't valid");
						} else{
							next();
						}
					}
				});
			} 
 	 	} catch (err) {
    		return next();
  		}
	} else {
		res.status(401);
  		res.end('Token not received')
		}
};

exports.authwritter=function(req,res,next){
	var token = req.headers['x-access-token'];

	if (token) {
  		try {
  			
	    	var decoded = jwt.decode(token, secret_Token);
    	 	if (decoded.exp <= Date.now()) {
    	 		res.status(401);
  				res.end('Access token has expired');
			}
			else{
				modelUser.findById(decoded.iss,function (err, doc){
					if(err) next(err);
					else {
						if(!doc){
							res.status(401);
							res.end("Access token isn't valid");
						} else if (doc.right<1){
							res.status(401);
							res.end("Insufficient right");

						}else {
							next();
						}
					}
				});
			} 
 	 	} catch (err) {
    		return next(err);
  		}
	} else {
		res.status(401);
  		res.end('Token not received')
		}
};

exports.authadmin=function(req,res,next){

	var token = req.headers['x-access-token'];
	console.log(token);
	if (token) {

  		try {  			
	    	var decoded = jwt.decode(token, secret_Token);
	    	console.log(decoded);
    	 	if (decoded.exp <= Date.now()) {

    	 		res.status(400);
  				res.end('Access token has expired');
			}
			else{
				console.log("test")
				modelUser.findOne({'_id':decoded.iss}).exec(function (err, doc){
					console.log('test');
					if(err) next(err);
					else {
						if(!doc){
							res.status(401);
							res.end("Access token isn't valid");
						} else if (doc.right<3){
							res.status(402);
							res.end("Insufficient right");

						}else {
							next();
						}
					}
				});
			} 
 	 	} catch (err) {
    		return next();
  		}
	} else {
		res.status(401);
  		res.end('Token not received')
		}

}