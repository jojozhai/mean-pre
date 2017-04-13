var express = require('express');
var router = express.Router();

var prodcutCtrl = require('../controllers/product');
var cartCtrl = require('../controllers/cart');
var settleCtrl = require('../controllers/settle');
var orderCtrl = require('../controllers/order');

/* GET home page. */
router.get('/', prodcutCtrl.productList);
router.get('/product/:id', prodcutCtrl.productDetail);

router.get('/cart', cartCtrl.cart);
router.get('/settle', settleCtrl.settle);
router.get('/order/:id', orderCtrl.order);

module.exports = router;