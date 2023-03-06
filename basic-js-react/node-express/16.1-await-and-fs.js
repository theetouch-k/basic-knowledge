const {readFile} = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    })
}

getText('./content/first.txt').then((result) => {
    console.log(result);
}).catch((result) => console.log(result));

//how about 2 files
//1st way
const firstFile = new Promise((resolve, reject) => {
    resolve(getText('./content/first.txt'))
})

const secondFile = new Promise((resolve, reject) => {
    resolve(getText('./content/second.txt'))
})

Promise.all([
    firstFile,
    secondFile,
]).then(messages => {
    console.log(messages);
})

//2nd way using await
//before using await we have to tell JS that we're using await which is a feature 
//of async function so we have to write 'async' infront of the function
const start = async () => {
    try {
        const first = await getText('./content/first.txt');
        const second = await getText('./content/second.txt');
        //what await do is tell that the code should wait until the func (getText)
        //finished and then after word it will continue do next things
        console.log([first,second]);
    }
    catch (err) {
        console.log(err);
    }
}

start()