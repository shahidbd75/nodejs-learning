const path = require('path');
const express = require('express');

const router = express.Router();
const rootDir = require('../utils/path');

const adminData = require('./admin');

router.get('/',(req, res, next) => {
    var products = adminData.products;
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop', {
        prods: products,
        pageTitle: 'My Shop',
        path: '/'
    });
});

module.exports = router;