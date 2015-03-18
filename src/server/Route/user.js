var express = require('express');
var bcrypt = require('bcrypt');

var User = require('../models/users');

/*********** Nouvelle organisation *****************/
/* 4 routes:                                      **/
/* app.post('/api/users', user.create);           **/
/* app.put('/api/users/:id', user.edit);          **/
/* app.get('/api/users/:id', user.get);           **/
/* app.get('/api/users', user.view);              **/
/***************************************************/

var router = express.Router();


router.get('/', function(req, res){

    User.find(function(err, users){
        if(err)
            return console.error(err);
        else
            res.send(users);
    });

});

router.post('/', function (req, res , next) {

    var newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 8);

    newUser.save(function(err, results){
        if (err)
            res.status(401).json( {error : err.message} );
        else
            res.status(200).send({error : 0, result : results});
    });
});

router.param('id', function(req, res, next, id){
    req.id = id;
    next();
});

router.get('/:id', function(req, res){
    User.findById(req.id, function(err, user){
        if(err)
            return next(err);
        else
            res.send(user);
    });
});

router.put('/:id', function(req, res){

});


module.exports = router;

/***************************************************/

/*var Schema = mongoose.Schema;

var userSchema = Schema({
    login       : String,
    password    : String,
    firstname   : String,
    lastname    : String,
    email       : String,
    token       : String,
    right       : Number
});
*/

/* A mettre avec le Schema */
/*User.userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};*/

//var user = mongoose.model('user', userSchema);

//module.exports.users=User.user;

/*User.user.findOne({right:2},function(err,doc){
    if(err) next(err);
    else if (!doc){
        var admin = new User.user({
            'login' : 'admin' ,
            'password' : bcrypt.hashSync('admin', 8),
            'firstname' : 'admin',
            'lastname' : 'admin',
            'right' : 2
            })
        admin.save(function(err,doc){
            if(err) next(err);
            else console.log("account admin created")
        })
    }
    else{
        console.log("account admin already ceated")
    }
});

User.userSchema.pre("save", function(next) {
    var self = this;
    User.user.findOne({email : this.email}, 'email', function(err, results) {
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

User.userSchema.pre("save", function(next) {
    var self = this;
    User.user.findOne({login : this.login}, 'login', function(err, results) {
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

    var newUser = new User.user();

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
            res.send({error : 0, result : results});
    });
};

var callback = function(err, numAffected){
};

exports.edit = function (req, res , next) {

    var query= ({_id : req.params.id});
 		var maj={};
    User.user.findById(req.params.id, function(error,result){
        if(error) next(error);
        else if(result==null){
            console.log("user not found when editing");
            res.sendStatus(404, {error : "0"});
            next();
        }
        else
           User.user.findOne({email : req.body.email}, function(errt, doc) {
                if(errt) next(errt);
                else{
                    console.log("req",req.body);
                    console.log("doca",doc);
                    if(result.email!=req.body.email){
                        if(doc) {
                            console.log("email already use");
                            res.sendStatus(401,{error : "1"});                            
                            return next();
                        }}
                        if(req.body.email!=null)
                            maj.email=req.body.email;
                        if(req.body.password!=null)
                            maj.password=bcrypt.hashSync(req.body.password, 8);
                        if(req.body.firstname!=null)
                            maj.firstname=req.body.firstname;
                        if(req.body.lastname!=null)
                            maj.lastname=req.body.lastname;
                        User.user.update(query, maj,function(errs,n){
                            if(errs){
                                console.log("error when update user");
                                next(errs);
                            }
                            else
                                res.send({error : "0", numAffected : n, result : maj});
                                next();
                            });
                    }
                });
            });
    

};

exports.get = function(req,res,next){
        var id = req.params.id;
        User.user.findById(id, function(err,result){
            if(err) return next(err);
            else
                res.json(result);
        });
    };

exports.view = function (req, res ,next) {
    User.user.find().select('firestname lastname right').exec(function (err, result) {
        if (!err) {
            return res.send(result);
        } else {
            console.log(err);
            next(err);
        }
    });
};*/
