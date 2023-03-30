// Problem-5: Given an array of numbers, create a new array with only the even numbers.

const numbers = [1, 9, 2, 5, 8, 0, 9];

// array length
const arrayLength = numbers.length;

// empty array
let evenNumbers = [];

for (let i = 0; i < arrayLength; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}
console.log(evenNumbers);
