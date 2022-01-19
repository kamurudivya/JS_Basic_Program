/*
* Birth month of 50 individual
*/

var birthMonthMap = new Map();
var isReached = false;

for (var i = 1; i < 13; i++) {
    birthMonthMap.set(i, 0)
}
function BirthMonth(birthMonth) {
    birthMonthMap.set(birthMonth, birthMonthMap.get(birthMonth) + 1);
}
var individual = 0;
while (individual < 50) {
    var birthMonth = Math.floor(Math.random() * 12) + 1;
    BirthMonth(birthMonth);
    individual++;
}
for (const [key, value] of birthMonthMap.entries()) {
    console.log("Month " + key + " has " + value + " Individuals");
}
