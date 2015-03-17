var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var article=require('../Route/article.js')

var PageSchema = new mongoose.Schema({
                         title : String,
                         content : [{type: Schema.Types.ObjectId, ref:'Article'}]
});


module.exports = mongoose.model('Page',PageSchema);
