// use these command
// package.json hold description about project ex. name, verstion, etc.
// $ npm init
// then package.json will appear
// install lodash
// $ npm install lodash

const _ = require('lodash');
let example = _.fill([1,2,3,4,5],"banana",1,4);
//from [1,2,3,4,5] change to banana index 1-3
//output: [ 1, 'banana', 'banana', 'banana', 5 ]
console.log(example);