// Problem-10: Given an array of integers, find two numbers that add up to a target value.

function sumOfTargetValue(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return console.log(numbers[left], numbers[right]);
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let target = 9;
sumOfTargetValue([2, 7, 11, 15], 9);
