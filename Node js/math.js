const sum = (a,b) => a+b;
const mult = (a,b) => a*b;
const g = 9.8;
const PI = 3.14;

//module.exports = 123; //it's an special object that contains every every details a file wants to share with another file.

let obj = {
    sum: sum,
    mult: mult,
    g: g,
    PI: PI,
};

module.exports = obj;

// let module.exports = {
//     sum: sum,
//     mult: mult,
//     g: g,
//     PI: PI,
// };
