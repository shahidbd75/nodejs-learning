const bodyParser = require('body-parser');
const path = require('path');
const express  = require('express');

const rootDir = require('./utils/path');
//router
const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminData.router);
app.use(shopRouter);

// app.set('view engine', 'pug');
app.set('view engine', 'ejs');

app.set('views','views');

//if page not found

app.use((req,res,next) => {
    res.status(404).render("404",{
        pageTitle: 'Page Not Found'
    });    //.sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(3000);