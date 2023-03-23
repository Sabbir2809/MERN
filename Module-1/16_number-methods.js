// 1. toFixed(): this method rounds a number to a specified number of decimal places & return a string. It's important to note that toFixed returns a string, not a number, so you may need to convert it back to a number using parseFloat or Number if you want to perform mathematical operations with it.
let PI = 3.1416;
console.log(PI.toFixed(2));

// 2. toString()
let id = 2809;
console.log(id.toString());

// 3. parseInt()
let num = 5.55;
console.log(Number.parseInt(num));

// 4. parseFloat()
console.log(Number.parseFloat(id));

// 5. isInteger()
console.log(Number.isInteger(num));
