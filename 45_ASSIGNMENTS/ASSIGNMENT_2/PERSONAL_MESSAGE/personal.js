"use strict";
let personname = "";
personname = prompt("what is your name?") || "";
if (personname !== null && personname !== "") {
    alert(`Hello ${personname}, would you like to learn same python today?`);
}
else {
    alert("you have to fill your name !");
}
