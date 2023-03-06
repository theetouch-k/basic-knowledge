const express = require('express');
const path = require('path');
const app = express();

app.get('/nostyle',(req,res)=> {
    //and for exporting file, we use sendFile instead of
    res.sendFile(path.resolve(__dirname,'./content/index.html'));
    //u can see that there is same issue as when we use http
})

app.get('/style',(req,res)=> {
    //and for exporting file, we use sendFile instead of
    res.sendFile(path.resolve(__dirname,'./content/index.html'));
    //u can see that there is same issue as when we use http
})

//this is for set up static(CSS,J,image) and middleware
app.use('/style', express.static('./content'));

//it will use all static file that included in index.html in ./content
app.use('/allasset', express.static('./content'));

//but instead of create every path for css, js and images
app.all('*',(req,res)=>{
    res.status(404).send('resource not found');
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000')
});