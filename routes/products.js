var express = require('express');
var router = express.Router();
var request = require('request');
var Product = require('../models/product');

router.get('/', function(req, res) {
  const options = {
    url: 'http://internal.ats-digital.com:3066/api/products',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  request.get(options, function(error, response, body) {
    if (error) {
      console.log(error);
    } else {
      var l = JSON.parse(body);
      var i = 0
      for (i; i < body.length; i++) {
        var singleProduct = new Product(l[i]);
        console.log('aa' + singleProduct);
        singleProduct.save(function(err) {
          if (!err)
            console.log("inserted ! ");
        });
      }
      res.json(l);
    }
  });

});
router.get('/getAllCategories', (req, res) => {
  var query = Product.find({}).distinct('category');
  query.exec((err, category) => {
    if (err)
      res.json(err)
    res.json(category);
  });
});
router.get('/getbyCategory/:category', (req, res) => {
  Product.find({
    "category": req.params.category
  }, {
    productName: 1
  }, (err, pr) => {
    if (err)
      res.json(err)
    res.json(pr);
  })
})




module.exports = router;
