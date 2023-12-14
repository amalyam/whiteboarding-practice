function mergeAlternately(word1: string, word2: string): string {

    const mergedArr = word1.split("").reduce((merged: string[], current, index) => {
        if (word2[index]) {
            merged.push(word1[index]);
            merged.push(word2[index]);
            } else {
                merged.push(word1[index]);
                }
        if (!word1[index+1]) merged.push(word2.slice(index+1));
        return merged;
    }, []);
    
    
    
    return mergedArr.join("");
    };
   
   console.log(mergeAlternately("abc", "pqr"));
   console.log(mergeAlternately("ab", "pqrs"));
   console.log(mergeAlternately("abcd", "pq"));
