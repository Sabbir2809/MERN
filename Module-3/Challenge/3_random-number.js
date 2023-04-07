// Generate a random integer between min and max(inclusive):
const randomIntegerNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomIntegerNumber(5, 20));
