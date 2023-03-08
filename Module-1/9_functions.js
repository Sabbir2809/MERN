// Function: code reusability, less code, easy to understand
function msg() {
  console.log('Allah...');
}

// parameterized function
function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  let a = num1;
  let b = num2;
  let sub = a - b;
  return sub;
}

msg();

const result = add(20, 5);
console.log(result);

const ans = sub(20, 5);
console.log(ans);
