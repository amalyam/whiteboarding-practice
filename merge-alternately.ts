function mergeAlternately(word1: string, word2: string): string {
    const largerWord = Math.max(word1.length, word2.length);

let mergedArr = [""];

for (let i = 0; i < largerWord; i++) {
    if (word1[i]) {
    mergedArr.push(word1[i]);
    }
        if (word2[i]) {
    mergedArr.push(word2[i]);
    }
}

return mergedArr.join("");
};
   
   console.log(mergeAlternately("abc", "pqr"));
   console.log(mergeAlternately("ab", "pqrs"));
   console.log(mergeAlternately("abcd", "pq"));
