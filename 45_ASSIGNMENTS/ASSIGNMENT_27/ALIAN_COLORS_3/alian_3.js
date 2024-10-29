"use strict";
//write a veriable alian and store the value green if alian = green so print the masege 
//the player earned 5 points 
//version=1
let alian = "green";
if (alian === 'green') {
    console.log("the player earned 5 points.");
    // if alian = yellow so print the masege 
    //the player earned 10 points 
}
else if (alian === 'yellow') {
    console.log("the player earned 10 point.");
    //if alian = red so print the masege 
    //the player earned 15 points 
}
else if (alian === 'red') {
    console.log("the player earned 15 point.");
}
//lian is not = yellow ,green and red so run the else massege
else {
    console.log("please select right color");
}
//make 3 this type of verion
//version 2
alian = "yellow";
if (alian === 'green') {
    console.log("the player earned 5 points.");
}
else if (alian === 'yellow') {
    console.log("the player earned 10 point.");
}
else if (alian === 'red') {
    console.log("the player earned 15 point.");
}
else {
    console.log("please select right color");
}
//version 3
alian = 'red';
if (alian === 'green') {
    console.log("the player earned 5 points.");
}
else if (alian === 'yellow') {
    console.log("the player earned 10 point.");
}
else if (alian === 'red') {
    console.log("the player earned 15 point.");
}
else {
    console.log("please select right color");
}
