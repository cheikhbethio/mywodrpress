var user=require('./user.js');
var jwt=require('jwt-simple');
var moment=require('moment');


module.exports.auth=function(req,res,next){

var token=req.headers['x-access-token'];
