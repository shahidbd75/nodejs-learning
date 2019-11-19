const bodyParser = require('body-parser');
const path = require('path');
const express  = require('express');

const rootDir = require('./utils/path');
//router
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRouter);
app.use(shopRouter);

//if page not found

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir,'views','404.html'));
});

app.listen(3000);