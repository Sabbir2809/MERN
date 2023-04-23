let arr = [5, 10, 15];

// array.prototype.reduce()
let result = arr.reduce((preValue, CurrentValue, currentIndex, arr) => {
  // console.log(`${currentIndex} -> ${arr}`);
  return preValue + CurrentValue;
}, 0);

console.log(result);
