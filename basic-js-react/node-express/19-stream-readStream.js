//stream are use to read and write
//now we have 4 types of stream
//1.writeable, 2.readable, 3.duplex(both read and write) 
//and 4.transform(modify data while writeing or reading)

//stream is also extend EventEmitter class

//when we use read sync or async approch what happen is we read the whole file
//if we have a huge file that can't be handle in the memory, the error will occured.
//so the solution is 'stream' when readStream stream will read file in chunks of data
//so u dont have to use huge memory for that big file.

//then what good points of normal readFile?
//ans : it's just for lazy person. It's set max buffersize to filesize so u have to use
//memomory exactly same size as your file. :(

//first we will create a big file to test

//const {writeFileSync}  = require('fs');
//for (let i=0; i<10000; i++) {
//writeFileSync('./content/big.txt','hello world', {flag:'a'});
//}

const {createReadStream} = require('fs');

const readstream = createReadStream('./content/big.txt');

//on on() of stream event's name must be 'data'
//see more on stream.Readable in doc
readstream.on('data', (result)=> {
    console.log(result);
})

//if you look at docs you will know that fs.readStream is extend from stream.Readble
//(fs.createReadStream is use to create instance of fs.ReadStream)

//by default the listener callback will pass chunk of data as Buffer
//be default the size of the buffer(size of one chunk) is 64kb u can control it like this
//const stream = createReadStream('./content/big.txt', { highWaterMark : 9000});
const readstream1 = createReadStream('./content/big.txt', { highWaterMark : 90000});

readstream1.on('data', (result)=> {
    console.log(result);
})

//we can also set encoder to encode buffer as a string
//const stream = createReadStream('./content/big.txt', { encoding : 'utf8'});


const readstream2 = createReadStream('./content/big.txt', { encoding : 'utf8'});

readstream2.on('data', (result)=> {
    console.log(result);
});
//we can handle error as well
readstream2.on('error', (err)=> {
    console.log(err);
})