// Remove duplicates from an array

const uniqueArray = (numbers) => [...new Set(numbers)];

const numbers = [1, 9, 2, 1, 5, 2, 8, 0, 9];
console.log(uniqueArray(numbers));
