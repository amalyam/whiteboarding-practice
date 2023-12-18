/*
Missing letters

Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.

fearNotLetter("abce") should return the string d.
fearNotLetter("abcdefghjklmno") should return the string i.
fearNotLetter("stvwx") should return the string u.
fearNotLetter("bcdf") should return the string e.
fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/

function fearNotLetter(str: string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const startingIndex = alphabet.search(str[0]);

    for (let i = 0; i < str.length; i++) {
        const alphabetIndex = startingIndex + i
        if (str[i] !== alphabet[alphabetIndex]) {
            return alphabet[alphabetIndex];
        }
    }
    
  }
  

console.log(fearNotLetter("abce")); // should return the string d.
console.log(fearNotLetter("abcdefghjklmno")); // should return the string i.
console.log(fearNotLetter("stvwx")); // should return the string u.
console.log(fearNotLetter("bcdf")); // should return the string e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.
