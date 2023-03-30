// Problem-6: Given an array of strings, find the longest string.

const strings = ['html', 'css', 'javaScript'];

// strings length
const stringsLength = strings.length;

// empty array
let longestString = strings[0];

console.log();
for (let i = 1; i < stringsLength; i++) {
  if (strings[i].length > longestString.length) {
    longestString = strings[i];
  }
}
console.log(longestString);
