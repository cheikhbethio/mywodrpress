mongoose = require('mongoose'); //MongoDB integration

var Schema = mongoose.Schema;

var userSchema = Schema({
	login		: {
					type: String,
					unique: true
					},
	password	: String,
	name		: String,
    email	    : {
					type: String,
					unique: true
					},
    token       : String,	
	right		: Number
});


var user= mongoose.model('user',userSchema);

userSchema.path('login').validate(function(value, done) {
    this.model('user').count({ login: value }, function(err, count) {
        if (err) {
            return done(err);
        } 
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'Login already exists');

userSchema.path('email').validate(function(value, done) {
    this.model('user').count({ email: value }, function(err, count) {
        if (err) {
            return done(err);
        } 
        // If `count` is greater than zero, "invalidate"
        done(!count);
    });
}, 'Email already exists');


exports.create=function (req, resp , next) {
    var newUser = new user(req.body);
    newUser.right=1;
    newUser.save(function(e, results){
        if (e) return next(e);
        res.send(results);
    })
};

exports.edit=function (req, resp , next) {
   user.findById(req.id).exec(function(err, doc){
        if (e) return next(e);
        if(doc!=null){
            if(req.password!=null)
            	doc.password=req.password;
            if(req.name!=null)
            	doc.name=req.name;
            if(req.email!=null)
            	doc.email=req.email;
            doc.save(function(e, results){
            	if (e) return next(e);
            	res.send(results);
            })
        }
        res.send(404)
    })
};

exports.get=function(req,res,next){
        var id = req.params.id;
        user.findById(id, function(err,result){
                     if(err) return next(err);
                    res.json(result);
    });