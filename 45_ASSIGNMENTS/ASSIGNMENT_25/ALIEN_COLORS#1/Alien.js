"use strict";
//create a variable called alien 
let Alien = "green";
//write an if statement to test whether the alien's color is green. 
//if it is, print a messagee that the player just earned 5 point.
if (Alien === "green") {
    console.log("player just earned 5 points !");
}
//write one version og this program that passes the if test and another that fail.
Alien = "YELLOW";
if (Alien === "green") {
    console.log("playes just earned 5 points !");
}
//the version that fails will have no output.
else if (Alien === "YELLOW") {
    console.log("player just earn 5 point !");
}
else if (Alien === "YELLOW") {
    console.log("player just earn 5 point !");
}
else {
    console.log("djv");
}
