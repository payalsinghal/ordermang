var mongoose = require('mongoose');
var HotelSchema = mongoose.Schema({


    hotel_name              :       { type: String },
    phone_no                :        { type: Number},
    email_id                :        {type: String},
    password                :        {type: String},
    lastLogin               :        [],
    hotel_id                :       { type: String},
    menu                    :       [{ 
                                   item_name    : {type: String},
                                   item_price   : { type: Number}
                                 }],
    addon                   :   [{     
                                   addon_name : {type: String},
                                   addon_price : { type: Number}
                                    }],
    order                    :[{
                                  order_name    : { type: String },
                                item_name     : {type: String},
                                item_price    : { type: Number},
                                addon_name    : {type: String},
                                addon_price   : { type: Number}
                              }]
    
    
      });
	module.exports = mongoose.model('Hotel', HotelSchema);