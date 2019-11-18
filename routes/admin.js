const express = require('express');

const router = express.Router();


router.get('/add-product',(req, res, next) => {
    res.send(`<h1>Product Entry</h1>
    <form method="POST" action="/admin/add-product"><input type="text" name="productName"/><input type="submit" value="Add" /></form>`);
});

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;