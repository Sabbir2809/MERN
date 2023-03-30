// Problem-1: Given an array of numbers, find the smallest number.

const numbers = [1, 9, 2, 5, 8, 0, 9];

// array length
const arrayLength = numbers.length;
// suppose smallest number
let smallestNumber = numbers[0];

for (let i = 1; i < arrayLength; i++) {
  //  check each number in the array & compare it to the current smallest number
  if (numbers[i] < smallestNumber) {
    // update the current smallest number
    smallestNumber = numbers[i];
  }
}
console.log(smallestNumber);
