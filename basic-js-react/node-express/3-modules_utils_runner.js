const names = require('./4-names');
console.log(names);

const sayHi = require('./5-utils');
console.log(sayHi);

sayHi(names.john);

const data = require('./6-another_way2export');
console.log(data);

require('./7-utils2'); //have output
const sum = require('./7-utils2'); //nothing happen, no any module exported from utils2