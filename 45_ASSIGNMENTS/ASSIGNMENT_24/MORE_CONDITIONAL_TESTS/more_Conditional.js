"use strict";
//true & false conditions 
Object.defineProperty(exports, "__esModule", { value: true });
// equality test 1
console.log('Equality test with string: ', 'Apple' === 'Apple');
//inequality test 2
console.log('Equality test with string: ', 'Apple' != 'orange');
// lowercase test 3
console.log('lower case function test : ', 'hello'.toLowerCase() === "hello");
// uppercase test 4
console.log('lower case function test : ', 'HELLO'.toUpperCase() === "HELLO");
//numerical test with equality test 5
console.log("Equality test with number:", 26 === 26);
//numerical test with inequality test 6
console.log("inEquality test with number:", 26 != 35);
//grater than (test 7)
console.log("less than test:", 5 < 10);
//less than(test 8)
console.log("grater than test:", 10 > 5);
//grater than and equal(test 9)
console.log("grater than and equal to test:", 10 >= 10);
//less than and equal(test 10)
console.log("less than and equal to test:", 5 <= 10);
//test using "and  operator 11
console.log("and operator  test:", 5 === 5 && 10 > 5);
//test using "or  operator 12
console.log(" operator  test:", 5 === 5 || 10 < 5);
//array  test 13
const fruits = ["Apple", "mango", "orange"];
console.log('test "Apple" in the array: ', fruits.includes("Apple"));
//array  test 14
console.log('test "Apple" in not in the array: ', !fruits.includes("graps"));
