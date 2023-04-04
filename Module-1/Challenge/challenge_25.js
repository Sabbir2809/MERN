// challenge #25: Calculate the sum of first 100 prime numbers

function sumPrimes(n) {
  let foundPrimes = 0;
  let i = 2;
  let sum = 0;

  while (foundPrimes < n) {
    if (isPrime(i)) {
      foundPrimes++;
      sum += i;
    }
    i++;
  }
  return sum;
}

// Returns true if number n is prime
function isPrime(n) {
  if (n < 2) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

let n = 10;
console.log('Sum of first ', n, ' primes is ', sumPrimes(10));
