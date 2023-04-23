// spread operator in array
let numbers = [1, 2, 3];
// exact copy of numbers
let x = [...numbers];
// copy
let newNumbers = [...numbers, 4, 5, 6];
// push
numbers.push(200);

let even = [2, 4];
let odd = [3, 5];

let even_odd = [...even, ...odd];

console.log(numbers);
console.log(x);
console.log(newNumbers);
console.log(even_odd);

// spread operator in object
let obj1 = {
  x: 1,
  y: 2,
};
let obj2 = {
  a: 1,
  b: 2,
};

console.log({ ...obj1, ...obj2 });
