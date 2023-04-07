// Check if all elements in an array are unique

const numbers = [1, 9, 2, 1, 5, 2, 8, 0, 9];

const isUnique = (numbers) => new Set(numbers).size === numbers.length;

console.log(isUnique(numbers));
