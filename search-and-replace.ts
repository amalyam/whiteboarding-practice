function myReplace(str: string, before: string, after: string): string {
    const firstIndex = str.toLowerCase().indexOf(before.toLowerCase());
    const lastIndex = firstIndex + before.length;
    let output = "";
    let isAfterCapitalized = false;
    let isWordCapitalized = false;

    if (after[0] === after[0].toUpperCase()) isAfterCapitalized = true;
    if (str.charAt(firstIndex) === str.toUpperCase().charAt(firstIndex)) isWordCapitalized = true;


    if (isAfterCapitalized === isWordCapitalized) { // if the word and its replacement both have the same case
        output = str.slice(0, firstIndex) + after;
    } else if (isWordCapitalized && !isAfterCapitalized) { // if the word is capitalized but its replacement is not
        output = str.slice(0, firstIndex) + after[0].toUpperCase();
        if (after.length > 1) {
            output += after.slice(1);
        }
    } else { // if word is not capitalized but its replacement is
        output = str.slice(0, firstIndex) + after.toLowerCase();
    }
    
    if (lastIndex < str.length) {
        output += str.slice(lastIndex);
    }
    
    return output;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
