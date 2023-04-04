// challenge #23: Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

function getDistinctElements(arr1) {
  let arr2 = [];

  for (let i = 0; i < arr1.length; i++) {
    if (!isInArray(arr1[i], arr2)) {
      arr2.push(arr1[i]);
    }
  }

  return arr2;
}

function isInArray(n, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === n) return true;
  }
  return false;
}

let arr1 = [1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100, -100];
getDistinctElements(arr1);
console.log(arr1);
