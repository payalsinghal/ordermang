var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Register = require('../../model/register');


exports.post=function(req,res) {

    register=new Register();
    register.name = req.body.name   ;
    register.phone_no= req.body.phone_no;
    register.email_id=req.body.email_id;
    register.password=req.body.password;

     Register.findOne({email_id:req.body.email_id},function(err,data)
     {
        if (data == null || data == undefined)
         {   


      register.save(function(err) {
            if (err)
                res.json(err);

            res.json({ message : ' registration done!' });

        });
      }
        else
            res.send({ message : ' registration already done!' });

    })
 };