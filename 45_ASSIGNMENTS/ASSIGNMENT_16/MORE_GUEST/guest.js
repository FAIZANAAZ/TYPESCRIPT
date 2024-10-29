"use strict";
let guest = ['maria', 'safia', 'hafsa'];
//for(let i=0; i<guest.length; i++){
//   console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//}
let absent_guest = ('maria');
let new_guest = ('eshu');
guest[0] = new_guest;
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
console.log(`Mrs. ${absent_guest} is not coming to the party .`);
console.log('Good news ! we  find big table so we are inviting 3 more guests.');
guest.unshift('alina');
guest.splice(2, 0, 'maheen');
guest.push('zunera');
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
