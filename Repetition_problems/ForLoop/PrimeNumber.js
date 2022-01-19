/*
* Take range number of input and output the prime numbers in that range 
*/
const prompts = require("prompt-sync")();
var start = parseInt(prompts("Enter starting number of range : "));
var end = parseInt(prompts("Enter final number of range : "));
var isPrime;
for (i = start; i <= end; i++) {
    isPrime = true;
    for (j = 2; j < i; j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i);
    }
}
