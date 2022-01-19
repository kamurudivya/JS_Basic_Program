/*
* Find repeated numbers twice between 0-100 
*/
var repeatedNumber = [];
function reverseOfNum(num) {
    var newNumber = 0;
    while (num != 0) {
        var remainder = num % 10;
        newNumber = newNumber * 10 + remainder;
        num = Math.floor(num / 10);
    }
    return newNumber;
}
for (var i = 0; i <= 100; i++) {
    if (reverseOfNum(i) === i && i > 9) {
        repeatedNumber.push(i)
    }
}
console.log(repeatedNumber);
