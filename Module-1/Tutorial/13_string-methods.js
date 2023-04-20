let city = 'Dhaka';
let country = 'Bangladesh';

// 1. charAt()
console.log(city.charAt(0));

// 2. concat()
console.log(city.concat(',' + country));

// 3. indexOf()
console.log(country.indexOf('a'));

// 4. lastIndexOf()
console.log(country.lastIndexOf('a'));

// 5. replace()
console.log(country.replace('desh', 'deshi'));

// 6. subStr(), subString()
console.log(country.substring(0, 6));

// 7. slice()
console.log(city.slice(1, 5));

// 8. toLowerCase()
console.log(city.toLowerCase());

// 9. toUpperCase()
console.log(city.toUpperCase());

// 10. trim()
let varsity = '   D I U  ';
let afterTrim = varsity.trim();

console.log(varsity.length);
console.log(afterTrim.length);
