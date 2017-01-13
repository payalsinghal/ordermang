var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../../model/hotel');




exports.delete=function(req, res) {
       
         Hotel.remove({email_id: req.body.email_id}, function(err, menu) {
            if (err)
                res.json(err);

            res.json({ message: 'Item Successfully deleted' });
        });
    }
    