/*
DNA Pairing

Pairs of DNA strands consist of nucleobase pairs. 
Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. 
Write a function to match the missing base pairs for the provided DNA strand. 
For each character in the provided string, find the base pair character. 
Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
Tests

pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

*/

function pairElement(str: string): [string, string][] {
    
    return str.split("").reduce((returnArray: [string,string][], currentLetter: string) => {
        if (currentLetter === "A") {
            returnArray.push(["A","T"]);
        } else if (currentLetter === "T") {
            returnArray.push(["T","A"]);
        } else if (currentLetter === "C") {
            returnArray.push(["C","G"]);
        } else {
            returnArray.push(["G","C"]);
        }
        return returnArray;
    }, []);
}


console.log(pairElement("GCG")); //should return [["G", "C"], ["C","G"], ["G", "C"]]
console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
