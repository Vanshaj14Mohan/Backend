//A special file used to gather information from other files and combine them and export them:
//The name should always be: index.js
//This will require everything from all the other files present in Data Folder.
const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

//Now you can use these variables as you would use any other variable in JavaScript. 
let fruits = [apple, banana, orange];

module.exports = fruits;
