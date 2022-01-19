/*
* Sum of three integer adds to zero
*/
var intArr = [1, -6, 7, 2, -1, 8, -7, -3, 4, 9];
for (var i = 0; i < intArr.length - 2; i++) {
    for (var j = i + 1; j < intArr.length - 1; j++) {
        for (var k = i + 2; k < intArr.length; k++) {
            if (intArr[i] + intArr[j] + intArr[k] === 0) {
                console.log("Sum of three numbers zero :" +intArr[i] + " " + intArr[j] + " " + intArr[k]);
            }
        }
    }
}
