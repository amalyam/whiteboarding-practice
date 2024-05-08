function palindrome(str) {
  const nonAlphaNum = /[\W_]/g;
  const alphaNumStr = str.replace(nonAlphaNum, "").toLowerCase();

  for (let i = 0; i < Math.floor(alphaNumStr.length / 2); i++) {
    if (alphaNumStr[i] !== alphaNumStr[alphaNumStr.length - 1 - i])
      return false;
  }
  return true;
}

// console.log(palindrome("eye")); // should return true
// console.log(palindrome("_eye")); // should return true
console.log(palindrome("race car")); // should return true
console.log(palindrome("A man, a plan, a canal. Panama")); // should return true
console.log(palindrome("never odd or even")); // should return true
console.log(palindrome("My age is 0, 0 si ega ym.")); // should return true
console.log(palindrome("0_0 (: /-\\ :) 0-0")); // should return true
