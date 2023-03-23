// 1. string: Strings are used to represent text and are enclosed in single or double quotes
let str = 'Sabbir Hossain';
console.log(str);

// 2. number: Numbers are used to represent numerical values, including integers & decimals
let num = 100;
let PI = 3.1416;
console.log(num, PI);

// 3. boolean: Booleans are used to represent true or false values
let right = true;
let wrong = false;
console.log(right, wrong);

// 4. null: Null is used to represent the intentional absence of any object value
let n = null;
console.log(n);

// 5. undefined: Undefined is used to represent a variable that has not been assigned a value
let budget;
console.log(budget);

// *** How to Data Type Check
console.log(typeof str, typeof num, typeof right, typeof n, typeof budget);

/*
The following values are always truthy:
  1. '0' (a string containing a single zero)
  2. 'false' (a string containing the text “false”)
  3. [] (an empty array)
  4. {} (an empty object)
  5. function(){} (an “empty” function)
*/

/*
The following values are always falsy:
  1. false
  2. 0 (zero)
  3. -0 (minus zero)
  4. '', "", `` (empty string)
  5. null
  6. undefined
  7. NaN
*/

const truthy_values = [
  false,
  0,
  ``,
  '',
  '',
  null,
  undefined,
  NaN,
  '0',
  'false',
  [],
  {},
  function () {},
].filter(Boolean(false));
// Filter out falsy values and log remaining truthy values
console.log(truthy_values);

// data type conversion
var num1 = '10';
var num2 = '5';

var bool1 = Boolean(num1); // true
var bool2 = Boolean(num2); // true
var str1 = String(bool1); // 'true'
var str2 = String(bool2); // 'true'
var num3 = Number(str1); // NaN
var num4 = Number(str2); // NaN

console.log(num3 + num4); // Output: Not a Number
