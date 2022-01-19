/*
* Unit conversion
*/
//5A
const feet = 12;
var inches = 42;
var result = inches / feet;
console.log("42 inch = " + result + "feet");
//5B
const squareMeters = 0.092903;
var length = 60;
var breadth = 40;
const area = length * breadth * squareMeters;
console.log(length + " feet " + " * " + breadth + " feet = " + area + " square meters ");
//5C
var numOfPlots = 25;
const acres = 2.29568e-5;
const result2 = length * breadth * acres * numOfPlots;
console.log(numOfPlots + " plots of " + length + " feet " + " * " + breadth + " feet = " + result2 + " acres");
