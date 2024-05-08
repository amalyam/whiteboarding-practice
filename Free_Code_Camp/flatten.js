/*
Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Global variables, Array.prototype.flat(), and Array.prototype.flatMap() should not be used
*/

function steamrollArray(arr) {
  const flatten = (inputArr) => {
    return inputArr.reduce((newArr, current) => {
      if (Array.isArray(current)) {
        newArr = newArr.concat(flatten(current));
      } else {
        newArr = newArr.concat(current);
      }
      return newArr;
    }, []);
  };

  return flatten(arr);
}

console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4]
