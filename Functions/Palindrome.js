/*
* Check palindrome number  
*/
const prompts = require("prompt-sync")();
var number1 = parseInt(prompts("Enter first number : "));
var number2 = parseInt(prompts("Enter second number : "));
function palindrome(num1, num2) {
    var newNumber = 0;
    while (num2 != 0) {
        var remainder = num2 % 10;
        newNumber = newNumber * 10 + remainder;
        num2 = Math.floor(num2 / 10);
    }
    if (num1 == newNumber)
        console.log("The numbers " + number1 + " and " + number2 + " are Palindromes");
    else console.log("The numbers " + number1 + " and " + number2 + " are not Palindromes");
}
palindrome(number1, number2);
