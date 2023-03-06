const http = require('http');

const server = http.createServer() 
server.on('request', (req,res)=> {
    res.end('Welcome');
});
//if you dig in to list of modules of node.js u will see that the http's request
//extend from EventEmitter module

server.listen(5000);