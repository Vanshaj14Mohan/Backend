//Importing sum, mult and PI4
import {sum, mult, PI} from "./math.js";

console.log(sum(2,4));
console.log(mult(2,4));
console.log("Value of PI", PI);

//Require vs Import
// :1 We can't selectively load only the pieces we need with require but with import we can selectively load only the pieces we need,
// which can save memory.

// :2 The import statement is only available in ES6 and later versions of JavaScript.
// Loading is synchornous for "require" but can be asynchronous for "import".