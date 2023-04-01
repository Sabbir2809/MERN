// Problem-7: Given an array of numbers, find the average.

const numbers = [1, 9, 2, 5, 8, 0, 9];

// array length
const arrayLength = numbers.length;
// initial sum is 0
let sum = 0;

for (let i = 0; i < arrayLength; i++) {
  sum += numbers[i];
}
// average formula
const average = (sum / arrayLength).toFixed(2);

console.log(parseFloat(average));
