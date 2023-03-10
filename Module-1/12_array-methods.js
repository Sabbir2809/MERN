let cheleBondhu = ['Salkin', 'Komol', 'Mizan', 'Maruf'];
let meyeBondhu = ['Sajia', 'Shefa', 'Zafrin'];

// 1. concat()
let friendZone = cheleBondhu.concat(meyeBondhu);
// console.log(friendZone);

// 2. form()
let name = 'Sabbir Hossain';
let nameArray = Array.from(name);
// console.log(nameArray);

// 3. filter()
let numArray = [20, 30, 40, 50, 60, 70, 80];
let result = numArray.filter((num) => num > 50);
// console.log(result);

// 4. find()
let ans = numArray.find((num) => num > 50);
// console.log(ans);

// 5. findIndex(): index
let ansIndex = numArray.findIndex((num) => num > 50);
// console.log(ansIndex);

// 6. forEach() : not return, only each element visit
numArray.forEach((item) => {
  console.log(item);
});

// 7. includes() : true, false
let existNum = numArray.includes(70);
// console.log(existNum);

// 8. indexOf() : index, -1
let existNumIndex = numArray.indexOf(70);
// console.log(existNumIndex);

// 10. push()
numArray.push(80);
numArray.push(90);
// console.log(numArray);

// 11. pop()
numArray.pop();
numArray.pop();
// console.log(numArray);

// 12. reverse()
numArray.reverse();
// console.log(numArray);

// 13. sort()
let unSortArray = [1, 9, 2, 5, 8, 0];
let sortArray = unSortArray.sort();
// console.log(sortArray);
// console.log(unSortArray);

// 14. slice()
let word = ['s', 'a', 'b', 'i', 'r'];
let newWord = word.slice(2, 4);
console.log(newWord);

// 15. splice()
let letter = ['A', 'B', 'C', 'D'];
letter.splice(0, 1, 'a');
console.log(letter);
