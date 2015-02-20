mongoose = require('mongoose'); //MongoDB integration

var Schema = mongoose.Schema;

var userSchema = Schema({
	login		: String,					
	password	: String,
	name		: String,
    email	    : String,					
    token       : String,	
	right		: Number
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
    var newUser = new user(req.body);
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
   user.findById(req.body.id).exec(function(err, doc){
        if (err) return next(err);
        else{
            if(doc!=null){
                if(req.body.password!=null)
            	   doc.password=req.body.password;
                if(req.body.name!=null)
            	   doc.name=req.body.name;
                if(req.body.email!=null)
            	   doc.email=req.body.email;
                doc.save(function(err, results){
            	   if (err) return next(err);
                    else
            	       res.sendStatus(200);
                })
            }
            else
                res.sendStatus(404);
        }
    })
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