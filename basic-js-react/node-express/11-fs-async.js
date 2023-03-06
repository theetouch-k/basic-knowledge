const { readFile, writeFile} = require('fs');

//first param is path
//second param if we dont provide it it will output as buffer, so we with string ' ' and
//we looking for utf8 so it be 'utf8'
//third param is a callback function which first param is err and the result for second

//what is callback function, callback function is a function that used by other function
//as parameter.

readFile('./content/first.txt','utf8',(err,result)=> {
    if (err) {
        console.log(err);
        return null; //return whatever u want if error
    }
    //console.log(result);
    const first = result;
    //now continue on the second file
    readFile('./content/second.txt','utf8',(err,result)=> {
        if (err) {
            console.log(err);
            return null;
        }
        const second = result;
        //now continue on write session
        writeFile('./content/result-async.txt',`Here is the result ${first}, ${second}`,(err,result)=> {
            if (err) {
                console.log(err);
                return null;
            }
            console.log(result);
        })
    });
})// we that run callback when we're done, like adding EventListener on a button

// the result is as same as 
// writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`);