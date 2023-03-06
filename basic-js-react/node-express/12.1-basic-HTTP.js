const http = require('http');
//first parma is a callback function which first param is request and the second is responds
const server = http.createServer((req,res)=>{
    //console.log(req)
    res.write('Hellooooo')
    res.end() //always end the responds after finished
})

server.listen(5000);
//$ node app.js
//see the result in localhost:5000 in ur web browser