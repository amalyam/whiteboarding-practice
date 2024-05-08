/*

Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

LCM formulas:
LCM(a, b) = |a * b| / GCD(a, b)
LCM(a, b, c) = LCM(LCM(a, b), c)

*/

function smallestCommons(arr) {
  const smallerNum = Math.min(...arr);
  const largerNum = Math.max(...arr);
  let tempLCM =
    Math.abs(smallerNum * (smallerNum + 1)) /
    greatestCommonDiviser(smallerNum, smallerNum + 1);

  for (let i = smallerNum + 2; i <= largerNum; i++) {
    tempLCM = Math.abs(tempLCM * i) / greatestCommonDiviser(tempLCM, i);
  }

  return tempLCM;
}

function greatestCommonDiviser(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(smallestCommons([1, 5]));
