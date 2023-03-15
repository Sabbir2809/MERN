// object
let Person = {
  name: 'Sabbir Hossain',
  age: 24,
  designation: 'MERN Developer',
  address: 'Singair, Manikganj',
  departmentInfo: {
    depart: 'CSE',
    id: '192-15-2809',
    section: 'PC-A',
    cheleBondhu: ['Salkin', 'Komol', 'Mizan', 'Maruf'],
  },
};

// object access
console.log(Person['name']);
console.log(Person.departmentInfo.id);

// object (for-in)
for (let item in Person) {
  console.log(Person[item]);
}
