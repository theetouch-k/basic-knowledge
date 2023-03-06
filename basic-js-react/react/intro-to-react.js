//the most popular for JS UI

//we need Node JS to run React
//and an extension on Chrome, React dev tools

//eaiest way to create react app is using 'Create React App'
//Facebook provides a create-react-app command to build react apps. 
//  npx create-react-app [app-name]
//  (dont worry npx come with npm version 5.2+)
//after u created react project (in this time it's 'react-js')
//cd to your project

//if u look at package.json u will see it's like node module's

//now if u look at public/index.html u will see <div id="root"></div>
//which is where our code (JS) going to live there.

//if u look at package.json file and look at scripts part
//u will see there is 'start' part which is for our server to run
//and 'build' part, which will minimize your file in src
//(When it’s time to move your app to production, having multiple JavaScript or CSS files isn’t ideal.
//When a user visits your site, each of your files will require an additional HTTP request,
//making your site slower to load. So to remedy this, you can create a “build” of our app,
//which merges all your CSS files into one file, and does the same with your JavaScript.
//This way, you minimize the number and size of files the user gets.

//let's try
//npm run build

//u might wonder we can use 'npm start' but why don't we use 'npm build'
//Unfortunately npm build is already an internal command, as described in the docs:
//This is the plumbing command called by npm link and npm install. It should generally not be called directly.

//1.)
//Ok let's start
//then we will wipe all file in src (boilder plate), so we can start from scratch
//then create 'index.js' file in src

