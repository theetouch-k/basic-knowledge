const { json } = require('express');
const express = require('express');
const app = express();
let {people} = require('./data');

app.get('/api/people', (req,res)=>{
    res.status(200).json({success:true, data:people});
})
//now we knew how to use GET but how about POST
//we will use template in folder 'methods-public'
//

app.use(express.static('./methods-public'));
//if you submit the form <form action="/login" method="POST">
//you will get 'Cannot POST /login'
//and if u see the http request Request Method is POST and status code is 404

//and <input type="text" name="name" id="name" autocomplete="false" />
//name is mean key of the input value that will be sent as form data
//like if u submited 'john', form data will be 'name : john'

//now let's create a post request path
//POST route have to be call from post request http only

//express.urlencoded() is a method inbuilt in express 
//to recognize the incoming Request Object as strings or arrays.
app.use(express.urlencoded({extended:false}));
//value can be a string or array (when extended is false),
//or any type (when extended is true).

//so now our req.body is now be read as String or Array

app.post('/login', (req,res)=> {
    //A request body is data sent by the client to your API.
    //A response body is the data your API sends to the client. 
    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
        //it it pass u will see that Content-Type: application/x-www-form-urlencoded
    }
    //HTTP 401 Unauthorized client error status response code
    res.status(401).send('Empty Name!?');
});

//now lets look at file javascript.ntml which is another way to do POST request
//it can add inputed name to the page and update the API (append inputed value to server data)

//Axios is a promise based HTTP client for the browser and Node js.
//Axios makes it easy to send asynchronous HTTP requests to REST endpoints
//and perform CRUD operations. It can be used in plain JavaScript or with 
//a library such as Vue or React.

//we have to use express json middleware because we have to pass our data (res.json()) to the script
app.use(express.json());

app.post('/api/people', (req,res)=> {
    const {name} = req.body;
    if (!name) {
        res.status(400).json({success:false, msg: 'Please Provide Name Value'});
    }
    res.status(201).json({success:true, person: name});
})

//now let's try on POSTMAN
app.post('/blabla',(req,res)=> {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json(
            {success: false, msg:"ERRORRRRRR"}
        )
    }
    //<Modal {...this.props} title='Modal heading' animation={false}>
    //would be the same as
    //<Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>

    //so ...people mean all elements in people (in data.js) and the new one (name) combined in
    //same array that act as value for data key
    res.status(200).json({success: true, data: [...people, name]})
})

app.listen(5000, ()=> {
    console.log('server is listening on port 5000');
});