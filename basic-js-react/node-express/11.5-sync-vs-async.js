//sync
const { readFileSync, writeFileSync} = require('fs');
console.log("start");
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,
{flag: 'a'});
console.log("done the task");
console.log("starting a new one");

//async
const { readFile, writeFile} = require('fs');
console.log("start");
readFile('./content/first.txt','utf8',(err,result)=> {
    if (err) {
        console.log(err);
        return null; 
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=> {
        if (err) {
            console.log(err);
            return null;
        }
        const second = result;
        writeFile('./content/result-async.txt',`Here is the result ${first}, ${second}`,(err,result)=> {
            if (err) {
                console.log(err);
                return null;
            }
            console.log("done the task");
        })
    });
})
console.log("starting a new one");

//why it like that? because JS compile code line by line (JS is singlethreaded)
//then how it can run inorder like that? https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd
//remember JS is single thread but browsers isn't.