/*
* Reads 5 random 2digit values and find sum and average 
*/
var random1 = Math.floor(Math.random() * 90) + 10;
var random2 = Math.floor(Math.random() * 90) + 10;
var random3 = Math.floor(Math.random() * 90) + 10;
var random4 = Math.floor(Math.random() * 90) + 10;
var random5 = Math.floor(Math.random() * 90) + 10;
console.log("Random numbers are :" + random1, +random2, +random3, +random4, +random5);
var sum = random1 + random2 + random3 + random4 + random5;
console.log("Sum :" + sum);
var average = sum / 5;
console.log("Average :" + average);
