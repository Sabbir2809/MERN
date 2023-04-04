// Problem-19: Suppose you have an array of objects representing people, and you want to filter the array to only include people who are over 18 years old.

const people = [
  { name: 'Sabbir Hosssain', age: 24 },
  { name: 'Abu Salkin', age: 23 },
  { name: 'Tahmid', age: 8 },
  { name: 'Tasin', age: 15 },
];

const adults = people.filter((person) => person.age >= 18);
console.log(adults);
