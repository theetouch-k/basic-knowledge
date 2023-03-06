//using Express module from npm
// $ npm init --yes
// $ npm install Express

const express = require('express');
const path = require('path');
const app = express();


// $ npm install body-parser
// $ npm install 
const bodyParser = require('body-parser');
//allow us to parse URL encoded forms, it parse data for us and attach it to the requested body
//extended option is setted to false because we aren't dealing with complicated object, we just use strings.
app.use(bodyParser.urlencoded({extended: false}));

//make static folder allias
app.use('/public', express.static(path.join(__dirname,'static')));
app.get('/',(req,res)=>{
    // res.send('Hello World');
    res.sendFile(path.join(__dirname,'static','index.html'));
});

app.get('/example',(req,res)=>{
    res.send('Hello Urn');
});

app.get('/profile/:name/:age',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + " : " + req.params.age);
});


app.post('/',(req,res)=> {
    console.log(req.body);
    // database work here
    res.send('successfully posted data');
});

document.getElementById
app.listen(3000);
