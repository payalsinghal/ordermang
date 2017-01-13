var mongoose = require('mongoose');
var OrderSchema = mongoose.Schema({


    order_name    : { type: String },
    item_name     : {type: String},
    item_price    : { type: Number},
    addon_name    : {type: String},
    addon_price   : { type: Number}
    
   });

	module.exports = mongoose.model('Order', OrderSchema);