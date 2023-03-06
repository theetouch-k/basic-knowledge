const { readFile, writeFile } = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

async function start() {
//or u can use head like this...
//const start = async () => {
    try {
        const first = await readFilePromise('./content/first.txt', 'utf8');
        const second = await readFilePromise('./content/second.txt', 'utf8');
        await writeFilePromise('./content/result-mind-grenade.txt', `First + Second : ${first} ${second}`);
        console.log(first, second);
    }
    catch (err) {
        console.log(err)
    }
}
start();