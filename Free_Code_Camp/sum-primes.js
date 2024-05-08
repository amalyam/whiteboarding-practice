/*
Sum All Primes

A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

*/

function sumPrimes(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  let total = 2;

  for (let i = 3; i <= num; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      total += i;
      console.log(i);
    }
  }
  return total;
}

console.log(sumPrimes(10)); // should return 17.
//console.log(sumPrimes(977)); // should return 73156.
