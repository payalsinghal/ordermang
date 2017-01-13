var express = require('express');
var router = express.Router();

var register = require('../Routes/controller/register');
router.post('/register',register.post);

var login= require('../Routes/controller/login');
router.post('/login',login.post);

var additem= require('../Routes/controller/additem');
router.post('/additem',additem.post);

var get_item= require('../Routes/controller/get_item');
router.post('/get_item',get_item.post);

var get_item_id= require('../Routes/controller/get_item_id');
router.post('/get_item/id',get_item_id.post);

var delete_hotel= require('../Routes/controller/delete_hotel');
router.delete('/delete_hotel',delete_hotel.delete);


module.exports = router;