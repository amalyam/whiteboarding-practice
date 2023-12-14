function mergeAlternately(word1: string, word2: string): string {
    const wordArr1 = word1.split("");
    const wordArr2 = word2.split("");
   
   let mergedArr = [];
   
   for (let i = 0; i < wordArr1.length; i++) {
       if (wordArr2[i] === undefined) {
           mergedArr.push(wordArr1.slice(i));
           break;
       } else {
           mergedArr.push(wordArr1[i]);
           if (i === wordArr1.length - 1) {
           mergedArr.push(wordArr2.slice(i));
           break;
       } else {
           mergedArr.push(wordArr2[i]);
       }
       }
   
   }
   
   return mergedArr.flat().join("");
   };
   
   console.log(mergeAlternately("abc", "pqr"));
   console.log(mergeAlternately("ab", "pqrs"));
   console.log(mergeAlternately("abcd", "pq"));
