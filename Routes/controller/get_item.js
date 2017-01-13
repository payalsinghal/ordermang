var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../../model/hotel');


exports.post=function(req, res) {
        Hotel.findOne({email_id: req.body.email_id}, function(err, items) {
            if (err)
                res.json(err);
            res.json(items);
        });
    }
