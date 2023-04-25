// object destructuring
const user = {
  id: 2809,
  name: 'Sabbir Hossain',
  age: 24,
  education: {
    degree: 'B.Sc in CSE',
  },
};

const { name: title, age } = user;
console.log(`Name -> ${title}, Age -> ${age}`);

const { education: { degree } = {} } = user;
console.log(degree);

// array destructuring
const numbers = [1, 2, 3, 4, 5];

const [, a, , , b] = numbers;
console.log(a, b);

// swap
let x = 10;
let y = 20;

[y, x] = [x, y];
console.log(x, y);
