"use strict";
// Write a TypeScript or Python script that performs a comprehensive set of conditional tests to evaluate various conditions and output whether each test passed or failed. Ensure that at least one test returns True and another returns False for each category of condition listed below:
// 1) String Equality and Inequality: 
// Check if two given strings are equal or not.
// Ensure there is one test that should return True and another that should return False.
//ANSWER 1*****************
let myname = "Faiza naaz";
let myname1 = "Faiza naaz";
//TRUE CONDITION
if (myname === myname1) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION
if (myname !== myname1) {
    console.log(true);
}
else {
    console.log(false);
}
//*********************************
// 2) Using Lowercase Function: 
// Convert a given string to lowercase and compare it with another lowercase string.
// Write at least one test that should return True and another that should return False.
//ANSWER 2***************
let your_name = "NIMRA";
let your_name1 = "nimra";
let your_name3 = your_name.toLowerCase();
//TRUE CONDITION
if (your_name3 === your_name1) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION
if (your_name === your_name1) {
    console.log(true);
}
else {
    console.log(false);
}
//****************************************** */
//     3) Numerical Comparisons: 
// Perform equality and inequality checks on given numbers.
// Include tests to check if one number is greater than, less than, greater 
//than or equal to, and less than or equal to another.
//ANSWER 3 *********************
let idNumber = 28;
let idNumber2 = 23;
//TRUE CONDITION
if (idNumber > idNumber2) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION
if (idNumber < idNumber2) {
    console.log(true);
}
else {
    console.log(false);
}
//********************************************* */
//4) Logical Operators :
// Test with logical "and" to ensure two conditions are both true.
// Test with logical "or" to ensure at least one condition is true.
// Ensure you have tests that return both True and False.
//ANSWER 4 ********************
let Class1Sub = 5;
let Class2Sub = 5;
let Class3Sub = 8;
//TRUE CONDITION
if (Class1Sub == Class2Sub || Class1Sub == Class3Sub) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION
if (Class1Sub == Class2Sub && Class1Sub == Class3Sub) {
    console.log(true);
}
else {
    console.log(false);
}
//***************************************************************** */
//5) Checking Items in an Array: 
// Given an array of items, test if a specific item is in the array.
// Have one test that should return True and another that should return False.
// ANSWER 5 ************ */
let my_arry = ['Faiza', 'Nimra ', 'Areeba', 'Yusra'];
//TRUE CONDITION
if (my_arry.includes("Faiza")) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION
if (my_arry.includes("izal")) {
    console.log(true);
}
else {
    console.log(false);
}
//******************************
//6) Checking Items Not in an Array: 
// Test if a specific item is not in a given array.
// Include one test returning True and one returning False.
//ANSWER 6 **************
let fruits_Name = ['Apple', 'Mango ', 'Banana', 'Orange'];
//TRUE CONDITION
if (fruits_Name.includes("Banana")) {
    console.log(true);
}
else {
    console.log(false);
}
//FALSE CONDITION 
if (my_arry.includes(" Strawberry")) {
    console.log(true);
}
else {
    console.log(false);
}
