//JSON is Javascript Object Notation

const express = require('express');
const app = express();

//data.js is a file that contain json type of data
const {products} = require('./data');

app.get('/', (req,res) => {
    res.send('<h1> Home Page </h1><a href="api/products">view productss</a>')
})

app.get('/api/products', (req,res)=> {
    //simply response json
    //res.json([{name:'john'},{name:'susan'}]);

    //how about sending whole data as JSON
    //supose we have data in data.js, we imported it in line#7 
    //we imported product from the file.
    
    //we can just res to user the whole data like this
    //res.json(products)
    
    //but how about we want only specific keys
    //we use map fucntion to map only specific info from product to our new const
    //map() method is used to iterate over an array and calling function on every element of array.

    //The map() method creates a new array populated with the results of calling a provided function
    // on every element in the calling array.

    //we iterate over every products then return only specific info of each product
    const productsBasicInfo = products.map(function (product) {
        //use specific data from product
        const {id,name,image} = product;
        return {id,name,image}
    })
    //now we res with the new array in json
    res.json(productsBasicInfo);
})

app.get('/api/products/1', (req,res)=> {
    const firstProduct = products.find((product)=>(product.id === 1));

    res.json(firstProduct);
})

//in express we have 'route paramaeter' that we dont have to write each produdct
//like 1,2,3,4 and so on
app.get('/api/products/:productID', (req,res)=> {
    console.log(req.params);
    console.log(typeof req.params);
    //if u navigate http://localhost:5000/api/products/2 u will get
    //{ productID: '2' }
    //and what we want is explicited value from the object
    const {productID} = req.params;
    console.log(typeof productID);
    //but productID is a string so we have to change it to number
    const singleProduct = products.find((product)=>(product.id === Number(productID)));

    //for checking if an object doesn't exist we use 'if (!object)' to check
    if (!singleProduct) {
        res.status(404).end("product doesn't exit");
        //or return res.status(404).send("product doesn't exit");
    }

    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=> {
    console.log(req.params);
    res.send('Hello Bob')
})

app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});