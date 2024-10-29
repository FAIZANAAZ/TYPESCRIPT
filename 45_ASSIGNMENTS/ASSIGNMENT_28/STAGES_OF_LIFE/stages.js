"use strict";
//set the value for the variable age,
let age = 25;
// if the person is less than 2 years old , print a message that the person is a baby.
if (age < 2) {
    console.log("person is a baby");
}
// if the person is atleast  2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("the person s a toddler");
}
// if the person is atleast 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
//if the person is atleast 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("person is a teenager");
}
//if the person is atleast 20 years old but less than 65, print a message that the person is adult.
else if (age >= 20 && age < 65) {
    console.log("person is an adult.");
}
//if the person is age 65 or older , print a message that the person is a elder.
else
    ("person is an elder");
