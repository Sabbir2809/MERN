// for
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// for...in
let obj = {
  name: 'JavaScript',
  year: 1995,
  developBy: 'Brendan Eich',
};

for (let property in obj) {
  console.log(property);
}

// for...of
let arr = [3, 5, 7, 9];
for (let element of arr) {
  console.log(element);
}

let str = 'JavaScript';
for (let element of str) {
  console.log(element);
}
