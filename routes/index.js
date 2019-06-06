var express = require('express');
var router = express.Router();


var Product = require('../models/product');


/* GET home page. */
router.get('/', function(req, res) {
  Product.find({}, function(err, products) {
    res.render('shop/index', {
      title: 'Shopping Cart',
      products: products
    });
  });
});



module.exports = router;
