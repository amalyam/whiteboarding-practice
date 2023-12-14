function mergeAlternately(word1: string, word2: string): string {
    const largerWord = Math.max(word1.length, word2.length);

let mergedString = "";

for (let i = 0; i < largerWord; i++) {
    if (word1[i]) {
    mergedString += word1[i];
    }
        if (word2[i]) {
    mergedString += word2[i];
    }
}

return mergedString;
};
   
   console.log(mergeAlternately("abc", "pqr"));
   console.log(mergeAlternately("ab", "pqrs"));
   console.log(mergeAlternately("abcd", "pq"));
