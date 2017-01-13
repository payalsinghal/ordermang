var mongoose = require('mongoose');
var RegisterSchema = mongoose.Schema({


    name                    :       { type: String },
    phone_no                :        { type: Number},
    email_id                :        {type: String},
    password                :        {type: String},
    hotel_id                :       { type: String}
   });

	module.exports = mongoose.model('Register', RegisterSchema);