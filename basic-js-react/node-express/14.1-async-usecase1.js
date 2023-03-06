const http = require('http');

const server = http.createServer((req,res) => {
    console.log('request event');
    res.end('Hello world');
});

server.listen(5000, ()=> {
    console.log('Server listening on port : 5000....')
});

//if we refresh the page many times we will see many res...why?
//because 'listen' functiomn in http is asynchronous which after we start server
//it will be store in WebAPIs so when request is come it will interact with server to
//sent the response