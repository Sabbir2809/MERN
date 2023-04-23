let arr = [10, 20, 30, 40, 50];
// array.prototype.map()
let result = arr.map((element, index, arr) => {
  return element / 2;
});

// original array
console.log(arr);
// modify array
console.log(result);
