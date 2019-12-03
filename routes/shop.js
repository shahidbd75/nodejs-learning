//const path = require('path');
const express = require('express');

const router = express.Router();
//const rootDir = require('../utils/path');
const shopController = require('../controllers/shopController');
//const adminData = require('./admin');

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/cart', shopController.getCart);
router.get('/checkout', shopController.getCheckout);
router.get('/orders', shopController.getOrders);

module.exports = router;