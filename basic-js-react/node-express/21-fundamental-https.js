//every time we open web address we perform 'http request' to server
//ex cnn.com we looking for server that have the resource we sent u 'http response'

//if u look at Network part in Broswer Inspector, u will see that Remote address of
//websites have port 443, why? :
//I know that there are some fixed using port that reserved for your device network sytem
//ex. port 22 for Secure Shell, port 123 for Network Time Protocal and yeah port 443 is
//reserved for HTTPS (HTTP Secure)

//express is built on top of node and more specifically, on top of http

const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('./content/index.html');
//if u remember readFileSync will read whole file as a Buffer
//console.log(homePage);


const homeStyles = readFileSync('./content/styles.css');
const homeScripts = readFileSync('./content/scripts.js');
const homeLogo = readFileSync('./content/logo.svg');

//request message will hit the server everytime user request resourse
//and server will response
const server = http.createServer((req, res)=> {
    console.log(req.method);
    console.log(req.url);
  
    if (req.url === '/') {
        //first argument is status code of the connection (that will appear in status 
        //in network part of inspector)
        //second is http headerwhat we will response
        //we response in html text so we set content-type to 'text/html'
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>Home Page</h1>");
        res.end();
    }
    else if (req.url === '/about') {
        res.writeHead(200, {'content-type':'text/html'});
        res.end('About page');
    }
    //how about using a html file as a response

    //since we loaded homePage before we create server (we also have to 
    //so user don't have to handle the file themself)
    else if (req.url === '/index') {
        //And yeah, we have to set content-type to html too
        res.writeHead(200, {'content-type':'text/html'});

        //after that we user write() method to write homepage
        //that write() method can be Buffer or String, it it buffer it will be encoded to
        //String automatically.
        res.write(homePage);

        //don't forget to end the response too.
        res.end();

        //actually u can use 'res.end(homePage)' because http.end() is acting like write()
        //but more than that is it also close the response so it wont allow u to write further.
    }
    //how to use css and js
    //remeber that u can't just only type like <link rel="stylesheet" href="./style.css"></link>
    //because when user go the page, browser will req server for like localhost:5000/style.css
    
    //which we havn't any url like that so it will cause 404 response for that part 
    //(index.html loaded successful but ctyle, scripte and images didn't load)
    
    //here is the way
    else if (req.url === '/styles.css') {
        res.writeHead(200, {'content-type': 'text/css'});
        res.write(homeStyles);
        res.end();
    }
    //also on scripts and logos(image)
    else if (req.url === '/scripts.js') {
        res.writeHead(200, {'content-type': 'text/javascript'});
        res.write(homeScripts);
        res.end();
    }
    else if (req.url === '/logo.svg') {
        res.writeHead(200, {'content-type': 'image/svg+xml'});
        res.write(homeLogo);
        res.end();
    }


    //use ` for html response in res.end()
    else {
        res.writeHead(404);
        res.end (`
    <h1>Oops!</h1>
    <p>Cant find the page</p>
    <a href="/"> Back Home </a>
    `)
    }
})

server.listen(5000);