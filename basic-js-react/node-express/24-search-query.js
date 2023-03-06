const express = require('express');
const app = express();
const {products} = require('./data');

app.get('/', (req,res) => {
    res.send('<h1> Home Page </h1><a href="api/products">view productss</a>')
})

app.get('/api/products', (req,res)=> {
    const productsBasicInfo = products.map(function (product) {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(productsBasicInfo);
})

app.get('/api/products/1', (req,res)=> {
    const firstProduct = products.find((product)=>(product.id === 1));

    res.json(firstProduct);
})

app.get('/api/products/:productID', (req,res)=> {
    console.log(req.params);
    console.log(typeof req.params);
    const {productID} = req.params;
    console.log(typeof productID);
    const singleProduct = products.find((product)=>(product.id === Number(productID)));

    if (!singleProduct) {
        res.status(404).end("product doesn't exit");
    }

    res.json(singleProduct);
})

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=> {
    console.log(req.params);
    res.send('Hello Bob')
})

app.get('/api/v1/query', (req,res)=> {
    console.log(req.query);
    //if u naviagate http://localhost:5000/api/v1/query
    //log wil be { name: 'John' }
    //if u naviagate http://localhost:5000/api/v1/query?name=John 
    //log wil be { name: 'John' }
    //if u naviagate http://localhost:5000/api/v1/query?name=John&id=4
    //log wil be { name: 'John', id: '4' }
    //if u naviagate http://localhost:5000/api/v1/query?name=John&id=4
    //log wil be { name: 'John', id: '4' } 
    
    res.send('Hello world');
})

app.get('/api/v2/query', (req,res)=> {
    console.log(req.query);
    //how about we looking for search query parameter
    //http://localhost:5000/api/v2/query?search=a&limit=2
    //seach=a mean all object that start with letter a
    //limit=2 mean limit how many objects that response to user
    
    //this is what you get from query { search: 'a', limit: '2' }
    //how to use it with our data
    //first explicit it to strings
    const {search, limit} = req.query;
    //sorted products by letters
    let sortedProducts = [...products]

    //if search is available
    if (search) {
        sortedProducts = sortedProducts.filter((product)=> {
            //if found first product that start with specific letter
            //break the iteration
            return product.name.startsWith(search);
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if (sortedProducts.length < 1) {
        //res.status(200).send('no product matched your search');
        //u can see that the output is fine but no there will be
        //error on console
        //because u Can't set headers after they are sent.
        return res.status(200).json({success: true, data: []});
    }
    return res.status(200).json(sortedProducts);

    console.log(sortedProducts);

    //Note : if we go to http://localhost:5000/api/v2/query u will see all products
    //because it not queried yet.
    res.send('Hello world');
    //since we use json response the response will closed auto
    //so the Hello world will not appear
})

app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});