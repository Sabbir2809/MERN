// Question: Write a function that takes an array of numbers as input and returns the sum of the squares of all even numbers in the array.

const sumOfEvenSquares = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i] ** 2;
    }
  }
  return sum;
};

const arr = [1, 2, 3, 4, 5];

console.log(sumOfEvenSquares(arr)); // Expected output: 20
