var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../../model/hotel');
var Register = require('../../model/register');




exports.post=function(req,res) {

   
   Register.findOne({email_id:req.body.email_id},function(err,d)
    {
              
    if (err) throw err;

    if (!d) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } 
   else{
       if (d.password != req.body.password) {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } 
    else {

                 var update = new Date().getTime();
                  d.hotel_id = update;

                  hotel=new Hotel()
                  hotel.email_id= req.body.email_id;
                  hotel.hotel_id = update;
                           
                    var ip = req.ip.split(":")
                    ipClient = ip[3];

                    obj = { date: new Date(), ip: ipClient };
                hotel.lastLogin.push(obj);
                hotel.markModified('lastLogin');

                    hotel.save(function(err) {
                    if (err)
                        res.json(err);

                    else {
                              res.json({ success: true , message:'Successful login.'  });
                          }


                        // Profile.update({ email: req.body.email }, { $push: { lastLogin:obj } }).exec()
                        // data.markModified('lastLogin');
                        // data.save(function(numAffected) {});
         
        })
      }}
})
 }