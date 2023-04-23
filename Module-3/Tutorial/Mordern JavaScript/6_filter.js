let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array.prototype.filter()
let result = numbers.filter((currentValue, index, arr) => {
  // console.log(currentValue, index, arr);
  return currentValue > 5;
});

console.log(result);
