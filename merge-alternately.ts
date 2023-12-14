function mergeAlternately(word1: string, word2: string): string {
    const wordArr1 = word1.split("");
    const wordArr2 = word2.split("");
   
   let mergedArr = [];
   
   for (let i = 0; i < wordArr1.length + wordArr2.length; i++) {
       if (wordArr1[i]) {
       mergedArr.push(wordArr1[i]);
       }
           if (wordArr2[i]) {
       mergedArr.push(wordArr2[i]);
       }
   }
   
   return mergedArr.join("");
   };
   
   console.log(mergeAlternately("abc", "pqr"));
   console.log(mergeAlternately("ab", "pqrs"));
   console.log(mergeAlternately("abcd", "pq"));
