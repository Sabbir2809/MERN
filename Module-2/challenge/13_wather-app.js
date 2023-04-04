// Problem-13: A weather app needs to format a list of temperatures in Celsius and Fahrenheit for display.

const temperatures = [12, 25, 8, 19, 3];

const formattedTemperatures = temperatures.map((temp) => {
  const fahrenheit = temp * 1.8 + 32;
  return `${temp}°C (${fahrenheit.toFixed(1)}°F)`;
});

console.log(formattedTemperatures);
