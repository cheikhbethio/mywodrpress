var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new mongoose.Schema({
  name: String,
  single: Boolean,
  page: {type: Schema.Types.ObjectId, ref:'Page'},
  dropdown: [{
                title : String, 
                page : {type: Schema.Types.ObjectId, ref:'Page'}
            }]
});

module.exports = mongoose.model('Menus', MenuSchema);
