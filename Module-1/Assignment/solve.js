// Question: Write a program that generates a multiplication table for a given number using a for loop.

function multiplicationTable(num) {
  // user call any input value convert to Integer
  let n = parseInt(num);
  for (let i = 1; i <= 10; i++) {
    let product = n * i;
    console.log(`${n} X ${i} = ${product} `);
  }
}
// function call
multiplicationTable(7);
