"use strict";
let guest = ['maria', 'safia', 'hafsa'];
for (let i = 0; i < 3; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
let absent_guest = ('safia');
let new_guest = ('eshu');
guest[1] = new_guest;
for (let i = 0; i < 3; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
console.log(`Mrs. ${absent_guest} is not coming to the party .`);
 console.log();