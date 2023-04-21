// ES6 fat arrow function

const print = () => {
  console.log('Arrow Function');
};
print();

//
const number = () => 9;
console.log(number());

//
const add = (num1, num2) => num1 + num2;
console.log(add(10, 20));

//
const hi = () => console.log('Hi...');
hi();

//
let javascript = {
  name: 'JavaScript',
  libraries: ['React', 'Angular', 'Vue'],
  printLibraries: function () {
    // console.log(this);
    this.libraries.forEach((l) => {
      console.log(`${this.name} loves ${l}`);
    });
  },
};

javascript.printLibraries();
