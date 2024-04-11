"use strict";
//Tests for equality and inequality with strings
let mango = "mango";
console.log("Is mango equal to 'mango'?");
console.log(mango == "mango");
console.log("\nIs mango not equal to 'mango'?");
console.log(mango != "mango");
//Tests using lowercase function
let mango2 = "MANGO";
console.log("\nIs MANGO equal to 'mango' when converted into lowercase?");
console.log(mango2.toLowerCase() == "mango");
console.log("\nIs MANGO not equal to 'mango' when converted into lowercase?");
console.log(mango2.toLowerCase() != "mango");
//Numerical Tests
let thousand = 1000;
let hundred = 100;
console.log("\nIs 1000 equal to 100?");
console.log(thousand == hundred);
console.log("\nIs 1000 not equal to 100?");
console.log(thousand != hundred);
console.log("\nIs 1000 greater than 100?");
console.log(thousand > hundred);
console.log("\nIs 1000 less than 100?");
console.log(thousand < hundred);
console.log("\nIs 1000 greater than or equal to 100?");
console.log(thousand >= hundred);
console.log("\nIs 1000 less than or equal to 100?");
console.log(thousand <= hundred);
//Tests using 'and' and 'or' operators
let ninety = 90;
let forty = 40;
console.log("\nIs 90 greater than 80 and less than 91?");
console.log(ninety > 80 && ninety < 91);
console.log("\nIs 90 greater than 180 and less than 50?");
console.log(ninety > 180 && ninety < 50);
console.log("\nIs 40 greater than 20 or less than 19?");
console.log(forty > 20 || forty < 19);
console.log("\nIs 40 greater than 50 or less than 25?");
console.log(forty > 50 || forty < 25);
//Test whether an item is in an array
let vegetables = ["spinach", "brinjal", "cabbage", "coliflower", "bitter gourd"];
console.log("\nIs 'cabbage' included in vegetables array?");
console.log(vegetables.includes("cabbage"));
console.log("\nIs 'apple' included in vegetables array?");
console.log(vegetables.includes("apple"));
//Test whether an item is not in an array
console.log("\nIs 'brinjal' not included in the vegetables array?");
console.log(!vegetables.includes("brinjal"));
console.log("\nIs 'pineapple' not included in vegetables array?");
console.log(!vegetables.includes("pineapple"));
