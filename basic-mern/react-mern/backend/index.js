let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    db = require('./database/db');

const productRoute = require('./routes/product.route')

mongoose.Promise = global.Promise;
mongoose.connect(db.db, {
    useNewUrlParser: true,
}).then(()=> {
    console.log("Database connected")
}).catch(err => {
    console.log(err)
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use( (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,accesstoken');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
  })

app.use('/products', productRoute);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, ()=> {
    console.log(`Connected to server port ${PORT}`)
})

app.use(function(err, req, res, next) {
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})