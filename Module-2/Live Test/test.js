// Question : Use the map() method to create a new array that adds 10 to each value of the original array, but only for values that are less than 5.

const originalArray = [1, 6, 2, 7, 3, 8, 4, 9, 5, 10];

// check values that are less than 5
const newArray = originalArray.map((number) => (number < 5 ? number + 10 : number));

// Output: [11, 6, 12, 7, 13, 8, 14,  9, 5, 10]
console.log(newArray); 
