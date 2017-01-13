var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../../model/hotel');



exports.post=function(req, res) {

    Hotel.findOne({email_id:req.body.email_id},function(err,d)
    {
             
    item_name = req.body.item_name;
    item_price= req.body.item_price;
    d.menu.push({item_name,item_price})

    addon_name = req.body.addon_name;
    addon_price = req.body.addon_price ;  
    d.addon.push({addon_name,addon_price})
        d.save(function(err) {
            if (err)
                res.json(err);

            else {
                res.json({ message: 'Item created!' });
            }
        });
        
    })
}