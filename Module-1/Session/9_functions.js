// Function: code reusability, less code, easy to understand

// 1. void function
function msg() {
  console.log('Allah...');
}

// 2. parameterized function
function add(num1, num2) {
  return num1 + num2;
}

// 3. return function
function sub(num1, num2) {
  let a = num1;
  let b = num2;
  let sub = a - b;
  return sub;
}

msg(); // how to function call

const result = add(20, 5);
console.log(result);

const ans = sub(20, 5);
console.log(ans);
