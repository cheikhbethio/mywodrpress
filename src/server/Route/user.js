mongoose = require('mongoose'); //MongoDB integration
var bcrypt=require('bcrypt');


//init Passord Hash

var Schema = mongoose.Schema;

var userSchema = Schema({
	login			: String,					
	password	: String,
	firstname	: String,
	lastname	: String,
  email	  	: String,					
  token   	: String,	
	right			: Number
});


var user= mongoose.model('user',userSchema);

userSchema.pre("save", function(next) {
    var self = this;
    user.findOne({email : this.email}, 'email', function(err, results) {
        if(err) {
            next(err);
        } else if(results) {
            self.invalidate("email", "Email must be unique");
            next(new Error("Email must be unique"));
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
            next(new Error("Login must be unique"));
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
    newUser.right=1;
    newUser.save(function(err, results){
            if (err) {
                res.send(err.message);
            }
            else
                res.sendStatus(200);
    })
};

exports.edit=function (req, res , next) {
   user.findOne({login : req.body.login}, function(err, doc){
        if (err) res.send(err.message);;
        else{
            if(doc!=null){
                if(req.body.password!=null)
            	   doc.password=bcrypt.hashSync(req.body.password, 8);
                if(req.body.firstname!=null)
            	   doc.firstname=req.body.firstname;
            	  if(req.body.lastname!=null)
            	  	doc.lastname=req.body.lastname;
                doc.save(function(err, results){
            	   if (err) return next(err);
                    else
            	       res.sendStatus(200);
                })
            }
            else
                res.sendStatus(404);
        }
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
