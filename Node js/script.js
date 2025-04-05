//Gonna be learning about Node js here
let n = 5;
for(i =0; i<n; i++){
    console.log("Good, ", i);
}
console.log("Bye");

let arg = process.argv;

for(let i =0; i<arg.length; i++){
    console.log("Hello ", arg[i]);
}

// console.log(process.argv);

const math = require("./math"); //accessing a file present in the same directory
console.log(math);
console.log(math.sum(2,2))
console.log(math.mult(2,4))
console.log(math.PI)

//require() -> A built-in function to include external modules that exist in separate files.