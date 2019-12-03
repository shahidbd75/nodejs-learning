const path = require('path');
const fs = require('fs');

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
        getProductsFromFile((products) => {
            products.push(this);
            fs.writeFile(p,JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callBack) {
        getProductsFromFile(callBack);
    }
}