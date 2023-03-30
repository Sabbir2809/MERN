// Problem-2: Given an array of numbers, find the largest number.

const numbers = [1, 9, 2, 5, 8, 0, 9];

// array length
const arrayLength = numbers.length;
// suppose largest number
let largestNumber = numbers[0];

for (let i = 1; i < arrayLength; i++) {
  //  check each number in the array & compare it to the current largest number
  if (numbers[i] > largestNumber) {
    // update the current largest number
    largestNumber = numbers[i];
  }
}
console.log(largestNumber);
