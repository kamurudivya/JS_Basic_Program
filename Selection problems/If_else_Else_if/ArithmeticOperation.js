/** 
Arithmetic Operations find min and max
*/
const prompts = require("prompt-sync")();
var a = prompts("Enter number 'a' : ")
var b = prompts("Enter number 'b' : ")
var c = prompts("Enter number 'c' : ")
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
const result1 = a + b * c;
const result2 = a % b + c;
const result3 = c + a / b;
const result4 = a * b + c;
console.log("Result of operations : " + result1 + "," + result2 + "," + result3 + "," + result4);
var maximum = result1;
if (result2 > maximum) maximum = result2;
if (result3 > maximum) maximum = result3;
if (result4 > maximum) maximum = result4;
console.log("Maximum value is= " + maximum);
var minimum = result1;
if (result2 < minimum) minimum = result2;
if (result3 < minimum) minimum = result3;
if (result4 < minimum) minimum = result4;
console.log("Minimum Value = " + minimum);
