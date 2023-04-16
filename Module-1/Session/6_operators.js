let num1 = 20;
let num2 = 5;

// 1. Arithmetic Operator
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

// 2. Comparison Operator
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);

// Equal to(==): This operator checks if two values are equal.If they are, it returns true, otherwise false.
console.log(5 == 5); // true
console.log('5' == 5); // true
console.log(5 == 6); // false

// Strict equal to(===): This operator checks if two values are equal & of the same type. If they are, it returns true, otherwise false
console.log(5 === 5); // true
console.log('5' === 5); // false
console.log(5 === 6); // false

// Not equal to(!=): This operator checks if two values are not equal.If they are not, it returns true, otherwise false
console.log(5 != 5); // false
console.log('5' != 5); // false
console.log(5 != 6); // true

// Strict not equal to(!==): This operator checks if two values are not equal and of the same type.If they are not, it returns true, otherwise false
console.log(5 !== 5); // false
console.log('5' !== 5); // true
console.log(5 !== 6); // true

// 3. Logical Operator (|| , &&, !)
// AND(&&): This operator returns true if both conditions are true, otherwise false
console.log(5 > 3 && 5 < 7); // true
console.log(5 > 7 && 5 < 3); // false
console.log(5 > 7 && 5 > 3); // false

// OR(||): This operator returns true if at least one of the conditions is true, otherwise false
console.log(5 > 3 || 5 < 3); // true
console.log(5 > 7 || 5 < 3); // false
console.log(5 > 7 || 5 > 3); // false

// NOT(!): This operator negates the condition, meaning if the condition is true, it returns false, and if the condition is false, it returns true.
console.log(!(5 > 3)); // false
console.log(!(5 < 3)); // true

function checkBooleans(bool1, bool2) {
  let result = '';
  if (bool1 && bool2) {
    result = 'Both values are true';
  } else if (bool1 || bool2) {
    result = 'At least one value is true';
  } else {
    result = 'Both values are false';
  }
  return result;
}

console.log(checkBooleans(true, true));
// Output: "Both values are true"
console.log(checkBooleans(true, false));
// Output: "At least one value is true"
console.log(checkBooleans(false, false));
// Output: "Both values are false"

// 4. Bitwise Operator (|, &)
