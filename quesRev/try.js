function alphabet(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    let printConsonat = [];
    let thisValue;
    for(const checkConsonant of str) {
        if(vowels.includes(checkConsonant)) {
            count++;
        }
        else if(/[a-zA-Z]/.test(checkConsonant)) {
            printConsonat.push(`${checkConsonant}`);
        }
    }
    if(count === 5) {
        thisValue = "correct";
    } else {
        thisValue = count;
    }
    return {VowelCount: thisValue, Consonents: printConsonat};
}
let inputAlphabets = alphabet(
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
);
// console.log("Consonents: ", inputAlphabets.Consonents.reverse().join(", "));
// console.log("Vowel Count: ", inputAlphabets.VowelCount);


