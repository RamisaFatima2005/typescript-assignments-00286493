"use strict";
//equality and unequality
let fruit = "apple";
console.log("\nIs apple is equal to apple?");
console.log(fruit == "apple");
console.log("\nIs apple is not equal to apple?");
console.log(fruit != "apple");
//to lowercase
let upperCaseFruit = "APPLE";
console.log("\nIs APPLE is equal to apple after compiling in lowercase?");
console.log(upperCaseFruit.toLowerCase() == "apple");
console.log("\nIs APPLE is not equal to apple after compiling in lowercase?");
console.log(upperCaseFruit.toLowerCase() != "apple");
//numbers
let ten = 10;
let twenty = 20;
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
console.log('\nIs ten is greater than twenty?');
console.log(ten > twenty);
console.log("\nIs ten is less than twenty?");
console.log(ten < twenty);
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);
console.log("\nIs twenty is less than or equal to ten?");
console.log(twenty <= 10);
console.log("\nIs twenty is not equal to ten and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);
console.log("\nIs twenty is not equal to ten and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);
console.log("\nIs 20 is greater than 50 OR 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\nIs 20 is not greater than 10 OR 20 is not equal to 20?");
console.log(20 > 10 || 20 != 20);
//array
let fruits = ["orange", "mango", "banana"];
console.log("\nIs mango is include in fruits array?");
console.log(fruits.includes("mango"));
console.log("\nIs strawberry is iclude in fruits array?");
console.log(fruits.includes("strawberry"));
