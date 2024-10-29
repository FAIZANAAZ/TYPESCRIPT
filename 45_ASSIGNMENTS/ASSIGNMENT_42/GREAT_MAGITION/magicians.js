"use strict";
let magician = ['hurry potter', 'hermione granger', 'roon weasley', 'albus dumledore'];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magician[i] = 'the great ' + magicianarray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magician(magician);
