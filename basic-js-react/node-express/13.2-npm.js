//since we already installed lodash pacckage (npm i lodash) we new can use it in our project
const _ = require('lodash');

const items = [1, [2,[3,[4]]]];
//flateenDeep funct in lodash can flat any array to one diemntional array
const newItems = _.flattenDeep(items);
console.log(newItems);

//now we knew about about dependencies in package,json
//lets talkabout devDependencies
//"dependencies" : Packages required by your application in production.
//"devDependencies" : Packages that are only needed for local development and testing.

//how to install packages in devDependencies?
// npm i <packageName> -D
// or
// npm i <packageName> --save-dev

//(use 'npm uninstall <packagename>' to uninstall)

//so let's install 'nodemon' in devDependencie
//nodemon is a tool that helps develop node. js based applications by automatically restarting the node application 
//when file changes in the directory are detected

//how to use nodemon?
//npm run dev

//now let's look in to script part in 'package.json'
//we can add this commands to script
//    "start": "node app.js",
//    "dev" : "nodeman app.js"
