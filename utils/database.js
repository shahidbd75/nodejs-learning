//pass: BdnxlJL0c2yn6Mc3

const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callBack) => {
    mongoClient.connect('mongodb+srv://admin:BdnxlJL0c2yn6Mc3@webcluster-nz88v.gcp.mongodb.net/shop?retryWrites=true&w=majority',{useUnifiedTopology:true}).then(client => {
        console.log('Database Conntected');
        _db = client.db();
        callBack();
    }).catch(err => {
        console.log('Unable to establish connection', err);
        //throw err;
    });
};

const getDb =() => {
    if(_db) {
        return _db;
    }
    throw 'No database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://<username>:<password>@webcluster-nz88v.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });