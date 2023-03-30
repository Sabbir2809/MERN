// Problem-4: Given an array of strings, create a new array with the first letter of each string.

const strings = ['html', 'css', 'javaScript'];

// strings length
const stringsLength = strings.length;
// empty array
let firstLetter = [];

console.log();
for (let i = 0; i < stringsLength; i++) {
  // push first letter of string
  firstLetter.push(strings[i].charAt(0));
}
console.log(firstLetter);
