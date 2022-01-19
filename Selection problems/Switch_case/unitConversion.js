/*
* Unit conversion 
*/
const prompts = require("prompt-sync")();
console.log("Enter \n1.Feet to Inch \n2.Feet to Meter \n3.Inch to Feet \n4.Meter to Feet \n");
const unit = prompts("Choose option : ")
const inch = 12;
const meter = 0.3048;
const length = prompts("Enter length : ")
var result = 0;
switch (parseInt(unit)) {
    case 1: {
        result = length * inch;
        console.log(length + " feet = " + result + " inches");
        break;
    }
    case 2: {
        result = length * meter;
        console.log(length + " feet = " + result + " meters");
        break;
    }
    case 3: {
        result = length / inch;
        console.log(length + " inches = " + result + " feet");
        break;
    }
    case 4: {
        result = length / meter;
        console.log(length + " meters = " + result + " feet");
        break;
    }
    default: console.log("Please select between 1-4");
}
