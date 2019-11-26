const Product = require('../models/product');
const getAddProduct = (req, res, next) => {
    res.render('add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

const postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

const getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('shop', {
        prods: products,
        pageTitle: 'My Shop',
        path: '/'
    });
}

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;
exports.getProducts = getProducts;