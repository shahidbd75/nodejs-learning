const bodyParser = require('body-parser');
const path = require('path');
const express  = require('express');

const rootDir = require('./utils/path');
const mongoConnect = require('./utils/database').mongoConnect;
//router
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const errorController = require('./controllers/errorController');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.set('views','views');

//if page not found

app.use(errorController.error404);


mongoConnect(() => {
    console.log('Surver running');
    app.listen(3000);
});