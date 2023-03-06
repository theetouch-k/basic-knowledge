const express = require('express');
const app = express();
const {products} = require('./data');

//req => middeware => res
//middleware is the heart of Express

app.get('/', (req,res) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method, url, year);
    //GET / 2021
    //u will see that mehod is GET, url is / and year is 2021
    res.send('<h1> Home Page </h1><a href="api/products">view productss</a>');
})

app.get('/api/products', (req,res)=> {
    const productsBasicInfo = products.map(function (product) {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(productsBasicInfo);
});

app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});