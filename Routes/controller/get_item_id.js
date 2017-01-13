var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../../model/hotel');



exports.post=function(req, res) {
        Hotel.findOne({hotel_id: req.body.hotel_id}, function(err, items) {
            if (err)
                res.json(err);
            res.json(items);
        });
    };