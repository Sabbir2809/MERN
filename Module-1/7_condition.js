// if-else if
let mark = 80;
if (mark >= 80 && mark <= 100) {
  console.log('Outstanding...');
} else if (mark >= 75 && mark <= 79) {
  console.log('Excellent...');
} else if (mark >= 70 && mark <= 74) {
  console.log('Very Good...');
} else if (mark >= 65 && mark <= 69) {
  console.log('Good...');
} else if (mark >= 60 && mark <= 64) {
  console.log('Satisfactory...');
} else if (mark >= 55 && mark <= 59) {
  console.log('Above Average...');
} else if (mark >= 50 && mark <= 54) {
  console.log('Average...');
} else if (mark >= 45 && mark <= 49) {
  console.log('Bellow Average...');
} else if (mark >= 40 && mark <= 44) {
  console.log('Pass...');
} else if (mark >= 0 && mark <= 39) {
  console.log('Fail...');
} else {
  console.log('Invalid Mark');
}

// switch case
let age = 17;
switch (true) {
  case age <= 12:
    console.log('Children');
    break;
  case age > 12 && age <= 17:
    console.log('adolescent');
    break;
  default:
    console.log('Adult');
}
