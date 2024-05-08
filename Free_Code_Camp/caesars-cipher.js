function rot13(str) {
  let result = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 0) {
      let strIndex = alphabet.indexOf(str[i]) - 13;
      if (strIndex < 0) {
        strIndex = 26 + strIndex;
      }
      result += alphabet[strIndex];
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
