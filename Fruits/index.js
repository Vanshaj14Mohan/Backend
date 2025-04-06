//A special file used to gather information from other files and combine them and export them:
//The name should always be: index.js
//This will require everything from all the other files present in Data Folder.
const apple = require("./apple");
const banana = require("./banana");
const mango = require("./mango");

//Now you can use these variables as you would use any other variable in JavaScript. 
let fruits = [apple, banana, mango ]; //Making an array here

module.exports = fruits;
