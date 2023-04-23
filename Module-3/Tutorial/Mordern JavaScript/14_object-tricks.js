const name = 'Sabbir Hossain';
let age = 24;

// Object
let person = {
  name,
  age,

  varsityInfo: {
    id: '192-15-2809',
    department: 'CSE',
    varsityName: 'DIU',
    sectionName: 'PC-A',
    semester: 11,
  },
};

let keys = Object.keys(person);
console.log(keys);

let values = Object.values(person);
console.log(values);

// let entries = Object.entries(person);
// console.log(entries);

for (let element of keys) {
  console.log(element);
}

for (let element of values) {
  console.log(element);
}
