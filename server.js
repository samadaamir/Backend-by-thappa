//First way to export single function from a module


// const add = require('./math');

// console.log(add(2,3));
//This method is known as CommonJS module system. It is used in Node.js. In this method we use require() to import modules and module.exports to export modules..

//2nd way to export multiple functions from a module


// const { add, multiply ,sub ,div } = require('./math');

// console.log(add(2, 3));
// console.log(multiply(2, 3));
// console.log(sub(2, 3));
// console.log(div(2, 3));

//Require the exported functions from math.js using destructuring assignment.
//  This allows us to import multiple functions from a module in a single line of code.
//  We can then use these functions in our server.js file as needed.


 //Third way to export multiple functions from a module

 