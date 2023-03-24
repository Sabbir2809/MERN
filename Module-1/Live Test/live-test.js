function gradeCalculator(num) {
  let mark = parseInt(num);

  if (mark >= 90 && mark <= 100) {
    return 'A';
  } else if (mark >= 80 && mark <= 89) {
    return 'B';
  } else if (mark >= 70 && mark <= 79) {
    return 'C';
  } else if (mark >= 60 && mark <= 69) {
    return 'D';
  } else if (mark >= 0 && mark <= 59) {
    return 'F';
  } else {
    return 'Input is not a number between (0 to 100)! Please, Enter Valid Mark.';
  }
}

let result = gradeCalculator(85);
console.log(result);
