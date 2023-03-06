const fs = require('fs')
//or if you want specific func and don't want to access func throght fs variable
const { readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first , second)

//First param is the path of the file if the file already exist, node will overwrite entire file
//with the second param. If the file isn't exist node will create a new one with the value.
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`);
//if you set flag in the third param to 'a' it will append the file with the value.
writeFileSync('./content/result-sync.txt',`Here is the result ${first}, ${second}`,
{flag: 'a'});