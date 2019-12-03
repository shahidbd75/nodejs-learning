const path = require('path');
const fs = require('fs');

const getDb = require('../utils/database').getDb;

// Persistence Method 
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

const getProductsFromFile = (callBack) => {
    fs.readFile(p, (err, fileContent) => {
        if(err) {
            callBack([]);
        } else {
            callBack(JSON.parse(fileContent));
        }
    });
}


module.exports = class Product {
    constructor(title,imageUrl, price, description) {
        this.title = title;
        this.imageurl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        const db = getDb();
        return db.collection('products').insertOne(this).then(result => {
            console.log(result);
           }).catch(err => {
               console.log('Db insert faild for save product');
           });
        // getProductsFromFile((products) => {
        //     products.push(this);
        //     fs.writeFile(p,JSON.stringify(products), (err) => {
        //         console.log(err);
        //     });
        // });
    }

    static fetchAll() {
        const db = getDb();

        return db.collection('products').find().toArray().then(result => {
            console.log(result);
            return result;
        }).catch(err => {
            console.log('Fetch Products', err);
        });
    }

    // static fetchAll(callBack) {
    //     getProductsFromFile(callBack);
    // }
}