var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ecommerce' });
  next()
});
router.get('/', function(req, res, next) {
  res.render('index', { name: 'name'});
});

module.exports = router;
