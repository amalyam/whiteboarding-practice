function translatePigLatin(str: string) {
    const vowels = ["a", "e", "i", "o", "u"];
    let output = "";
    let consonantCount = 0;
  

    if (vowels.includes(str[0])) {
      return str + "way";
    }

    for (let i = 1; i < str.length; i++) {
      if (vowels.includes(str[i])) {
       return str.slice(i) + str.slice(0, i) + "ay"; 
      }
    }

    return str + "ay";
  }



console.log(translatePigLatin("consonant")); //onsonantcay
console.log(translatePigLatin("california")); //aliforniacay
console.log(translatePigLatin("paragraphs")); //aragraphspay
console.log(translatePigLatin("glove")); //oveglay
console.log(translatePigLatin("algorithm")); //algorithmway
console.log(translatePigLatin("eight")); //eightway
console.log(translatePigLatin("schwartz")); //artzschway
console.log(translatePigLatin("rhythm")); //rhythmay
