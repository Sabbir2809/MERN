// 1. for loop
let num = 10;
for (let i = 1; i <= num; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i === 7) {
    break;
  }
  console.log(i);
}

// 2. while loop
let i = 0;
while (num > i) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 3. do-while
let x = 1;
do {
  console.log('Allah');
  x++;
} while (x <= 3);
