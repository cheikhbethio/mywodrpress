var mongoose = require('mongoose');
var bcrypt=require('bcrypt');


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

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

var user = mongoose.model('user', userSchema);

module.exports.users=user;

userSchema.pre("save", function(next) {
    var self = this;
    user.findOne({email : this.email}, 'email', function(err, results) {
        if(err) {
            next(err);
        } else if(results) {
            self.invalidate("email", "Email must be unique");
            next(new Error("1"));
        } else {
            next();
        }
    });
});

userSchema.pre("save", function(next) {
    var self = this;
    user.findOne({login : this.login}, 'login', function(err, results) {
        if(err) {
            next(err);
        } else if(results) {
            self.invalidate("login", "Login must be unique");
            next(new Error("2"));
        } else {
            next();
        }
    });

});

exports.create=function (req, res , next) {

    var newUser = new user();

    newUser.login=req.body.login;
    newUser.password=bcrypt.hashSync(req.body.password, 8);
    newUser.firstname=req.body.firstname;
   	newUser.lastname=req.body.lastname;
		newUser.email=req.body.email;    
    newUser.right=0;

    newUser.save(function(err, results){
        if (err) {
            res.sendStatus(401,{error : err.message});
        }
        else
            res.send({error : 0});
    });
};

var callback = function(err, numAffected){
};

exports.edit = function (req, res , next) {

    var query= ({_id : req.params.id});
 		var maj={};
    user.findById(req.params.id, function(error,result){
                        if(error) next(error);
                        else if(result==null){
                        console.log("user not found when editing");
                        res.sendStatus(404, {error : "0"});
                        next();                        
                        }                        
                        else
                        	user.findOne({email : req.body.email}, 'email', function(errt, doc) {
                        		if(errt) next(errt);
                        		else{
                        			if(result.email!=req.body.email){
																	if(doc) {
           													res.sendStatus(401,{error : "1"});
           													next();           													
       												 		}else{
       												 			if(req.body.email!=null)
       												 				maj.email=req.body.email;
        														if(req.body.password!=null)
        															maj.password=bcrypt.hashSync(req.body.password, 8);
        														if(req.body.firstname!=null)
      										 						maj.firstname=req.body.firstname;
      										 					if(req.body.lastname!=null)
      											 					maj.lastname=req.body.lastname;
    	       													console.log("maj",maj);
		 																	user.update(query, maj,function(errs,n){
               							 							if(errs) 
                    												next(errs);
                    											else
                    												res.send({error : "0"});
                    												next();
    																		});
    															}
    														}
    													}
    									});
 });

    

};

exports.get = function(req,res,next){
        var id = req.params.id;
        user.findById(id, function(err,result){
                        if(err) return next(err);
                        else
                            res.json(result);
                });
    };

exports.view = function (req, res ,next) {
    user.find().exec(function (err, result) {
        if (!err) {
            return res.send(result);
        } else {
            console.log(err);
            next(err);
        }
    });
};
