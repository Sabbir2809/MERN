// BMI function call when calculate button click
function calculateBMI() {
  // finding input value by id
  let weight = parseFloat(document.getElementById('weightInput').value);
  let height = parseFloat(document.getElementById('heightInput').value);
  let result = document.getElementById('result');

  // Checking the user providing a proper value or not
  if ((weight === '' || isNaN(weight)) && (height === '' || isNaN(height))) {
    result.innerHTML = 'Provide a valid Weight & Height!';
  }
  // If both input is valid, calculate the BMI
  else {
    // The BMI formula is: BMI = weight (kg) / (height (m) * height (m)).
    // Fixing upto 2 decimal places
    let BMI = (weight / (height * height)).toFixed(2);

    // Dividing as per the BMI conditions
    if (BMI < 18.6) {
      result.innerHTML = `Under Weight : <span>${BMI}</span>`;
    } else if (BMI >= 18.6 && BMI < 24.9) {
      result.innerHTML = `Normal : <span>${BMI}</span>`;
    } else {
      result.innerHTML = `Over Weight : <span>${BMI}</span>`;
    }
  }
}
