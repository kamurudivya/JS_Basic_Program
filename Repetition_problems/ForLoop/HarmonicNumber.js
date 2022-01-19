/*
* print nth harmonic number 
*/
const prompts = require("prompt-sync")();
var nthNumber = prompts("Enter the nth value : ");
var harmonicNumber = 0;
nthNumber = parseInt(nthNumber)
for (i = 1; i <= nthNumber; i++) {
    harmonicNumber += 1 / i;
}
console.log((i - 1) + "th Harmomnic number = " + harmonicNumber);
