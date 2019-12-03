const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
    res.render('admin/add-product',{
        pageTitle: 'Add Product',
        path: '/admin/add-product'
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

const postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const product = new Product(title,imageUrl,price,description);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next) => {
    Product.fetchAll((products) => {
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin Products',
            path: '/'
        });
    });
}

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;