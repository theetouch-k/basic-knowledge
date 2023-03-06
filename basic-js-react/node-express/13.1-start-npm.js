//npm is node package manager, more info npsjs.com

// install package local dependency - use irt only in this particullar project
// npm i <packagename>

// global dependency - use it in any project
// npm i -g <pckagename>

//example of an interesting package : lodash
//when u installed a package it will be shown in depency header in package.json

// in node package.json is a manifest file that store info about the project package
// so when we push in any version control, if any one pull our code they will install dependencies
// that listed in the package by just using 'npm install' command.
// how to get 'package.json' ? 
// --> manual approch (create json manually in the root)
// --> use npm command

// npm init (create package step by step)
// npm init -y (create package and set everything default)