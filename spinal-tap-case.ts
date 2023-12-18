/* 
Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
Tests

spinalCase("This Is Spinal Tap") should return the string this-is-spinal-tap.
spinalCase("thisIsSpinalTap") should return the string this-is-spinal-tap.
spinalCase("The_Andy_Griffith_Show") should return the string the-andy-griffith-show.
spinalCase("Teletubbies say Eh-oh") should return the string teletubbies-say-eh-oh.
spinalCase("AllThe-small Things") should return the string all-the-small-things.
*/

function spinalCase(str: string) {
    const strArray = str.split("");

    return strArray.reduce((spinalString, current, index) => {
      if ((/[A-Z]/.test(current))) {
        spinalString += current.toLowerCase();
      } else if ((/[a-z]/.test(current))) {
        spinalString += current;
      }

      if (index + 1 !== strArray.length && current === " " || current === "_" || current === "-" || (/[A-Z]/.test(strArray[index+1]))) {
        spinalString += "-";
      }

      return spinalString;
    }, "");
  }


  

console.log(spinalCase("This Is Spinal Tap")); //this-is-spinal-tap
console.log(spinalCase("thisIsSpinalTap")); //this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); //teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); //all-the-small-things
