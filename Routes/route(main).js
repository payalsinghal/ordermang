var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Hotel = require('../model/hotel');
var Register = require('../model/register');
var router = express.Router();



router.route('/register').post(function(req,res) {

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
                res.send(err);

            res.send({ message : ' registration done!' });

        });
      }
        else
            res.send({ message : ' registration already done!' });

    })
 });




router.route('/login').post(function(req,res) {

   
   Register.findOne({email_id:req.body.email_id},function(err,d)
    {
              
    if (err) throw err;

    if (!d) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } 
   else{
       if (d.password != req.body.password) {
      res.send({ success: false, message: 'Authentication failed. Wrong password.' });
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
                        res.send(err);

                    else {
                              res.send({ success: true , message:'Successful login.'  });
                          }


                        // Profile.update({ email: req.body.email }, { $push: { lastLogin:obj } }).exec()
                        // data.markModified('lastLogin');
                        // data.save(function(numAffected) {});
         
        })
      }}
})
 })


router.route('/additem').post(function(req, res) {

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
                res.send(err);

            else {
                res.json({ message: 'Item created!' });
            }
        });
        
    })
});

// router.route('/addons').post(function(req, res) {

//     Hotel.findOne({email_id:req.body.email_id},function(err,d)
//     {
             
//     d.addon.addon_name = req.body.addon_name;
//     d.addon.addon_price = req.body.addon_price ;
//     //d.addon.push({addon_name , addon_price })
         
//         d.save(function(err) {
//             if (err)
//                 res.send(err);

//             else {
//                 res.json({ message: 'Item created!' });
//             }
//         });
        
//     })
//});


router.route('/get_items').post(function(req, res) {
        Hotel.findOne({email_id: req.body.email_id}, function(err, items) {
            if (err)
                res.send(err);
            res.json(items);
        });
    });




// router.route('/delete_item').delete(function(req, res) {
//        Hotel.findOne({email_id: req.body.email_id}, function(err, data) {
//          //data.remove($and:[{menu:{item_name: req.body.item_name,price:req.body.price}}], function(err, menu) {
//             if (err)
//                 res.send(err);

//             res.json({ message: 'Item Successfully deleted' });
//         });
//         });
//     //});







// router.route('/update_item').put(function(req, res) {

//      Hotel.findOne({email_id: req.body.email_id}, function(err, d) {
//              item_name = req.body.item_name;
//             price     = req.body.price;
//            //d.menu.push({item_name,price})
         
//         d.save(function(err) {
//             if (err)
//                 res.send(err);

//             else {
//                 res.json({ message: 'Item created!' });

//         }
//     });
//     })
// });

 
router.route('/delete_hotel').delete(function(req, res) {
       
         Hotel.remove({email_id: req.body.email_id}, function(err, menu) {
            if (err)
                res.send(err);

            res.json({ message: 'Item Successfully deleted' });
        });
    });
    


router.route('/get_items/id').post(function(req, res) {
        Hotel.findOne({hotel_id: req.body.hotel_id}, function(err, items) {
            if (err)
                res.send(err);
            res.json(items);
        });
    });

router.route('/order').post(function(req, res) {
  Hotel.findOne({hotel_id: req.body.hotel_id}, function(err, order) {

    order_name   =req.body.order_name;
    item_name    =req.body.item_name ;
    item_price    =req.body.item_price;
    addon_name    =req.body. addon_name ;
    addon_price   =req.body.addon_price;
    total_price=req.body.total_price;
    order.order.push(order_name,item_name,item_price, addon_name,addon_price,total_price)
    
            if (err)
                res.send(err);
            res.json(items);
        });
    });


module.exports = router;
