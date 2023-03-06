const express = require('express');
const app = express();
const {products} = require('./data');

const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    //REMEMBER that when we set up a middleware if you don't want to go back to
    //continue execute code where the middleware called, you have to end the response
    
    //what is next(), it's mean it will point back and continue execute where
    //the middleware called.
    next();
};

//between url and the callback function we can put in the MIDDLEWARE
app.get('/', logger, (req,res) => {
//but in the logger we're accessing request, how can i do that?
//Ans: Express pass its in our middleware function
//and of course, it's our job to access themm as parameters.
    res.send('<h1> Home Page </h1><a href="api/products">view productss</a>');
});

app.get('/api/products',logger, (req,res)=> {
    const productsBasicInfo = products.map(function (product) {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(productsBasicInfo);Å
});

app.get('/test', (req,res)=> {
    res.send('<h1> Test Page </h1><a href="/">Home page</a>');
});

//if u want to apply all middleware to all urls u can use 
//use() method before those urls
app.use(logger)

//app.use() look similar right?
//we ever used it like app.use('/style', express.static('./content'));
//express.static() is a built-in middleware of express


app.get('/about', (req,res)=> {
    res.send('<h1> About Page </h1><a href="/">Home page</a>');
});

//since middleware is a module so we can write it im another file (actually u should)

const authorize = require('./authorize');

app.get('/menu',authorize, (req,res)=> {
    res.send('<h1> Menu Page </h1><a href="/">Home page</a>');
});

//and of course, u can use app.use(middleware) as well.
app.use(authorize);

app.get('/shop', (req,res)=> {
    console.log(req.query);
    console.log(req.user);
    res.send('<h1> Shop Page </h1><a href="/">Home page</a>');
});

//or if you want to use both, it's can use by
app.use([logger,authorize])

//an interesting middleware is 'morgan'
//npm i morgan
const morgan = require('morgan');

app.use(morgan('tiny'));
//'tiny' mean it will provide u only most essential data

app.get('/testmorgan', (req,res)=> {
    res.send('<h1> Morgan Page </h1><a href="/">Home page</a>');
});
//GET /testmorgan?user=john 200 47 - 1.106 ms


app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});