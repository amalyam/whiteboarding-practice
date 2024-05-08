/*
Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

 */

function sumFibs(num) {
  if (num === 0) return 0;
  if (num <= 2) return 1;

  let prev = 1;
  let current = 1;
  let sum = 0;

  while (prev <= num) {
    if (prev % 2 !== 0) sum += prev;

    const newCurrent = current + prev;
    prev = current;
    current = newCurrent;
  }
  return sum;
}

console.log(sumFibs(1)); // should return 1
console.log(sumFibs(4)); // should return 5
console.log(sumFibs(1000)); // should return 1785.
console.log(sumFibs(4000000)); // should return 4613732.
console.log(sumFibs(75024)); // should return 60696.
console.log(sumFibs(75025)); // should return 135721.
