//npm install express
//or for specific version
//npm install express@4.17.1
//or
//npm install express --save
//for earlier version of node

// Express, is a back end web application framework for Node.js.

//Node.js is an open-source, cross-platform, back-end JavaScript runtime environment 
//that runs on the V8 engine and executes JavaScript code outside a web browser. 

const express = require('express');
const app = express();

//but first we have to create urls for our webpage so we use built-in get method of express
app.get('/', (req,res)=>{
    console.log('user requested!');
    res.send("Hello world");
    //or
    //res.end("Hello world");
})

app.get('/about', (req,res)=> {
    //u can add .status(STATUS CODE) before invoke with send method
    res.status(200).send('About Page');
})

//express has default res for 404 header

//user can do multiple things using all() method
//all() can handle all http verbs such as get(), post() or whatever
//first argument is path
//second argument is callback function

//'*' mean ALL PATH EXCEPT CREATED PATH, every path you interact with will have 
//to take action of this callback function
app.all('*',(req,res)=> {
    //u can add .status(STATUS CODE) before invoke with send method
    res.status(404).send(`<h1>resource not found</h1>`);
})

//don't forget that JS is single thread, it execute code line by line so listening
//to the server is the lastthing we will do.
app.listen(5000, ()=>{
    console.log('server listening on port 5000');
})

//app.use is response for middleware