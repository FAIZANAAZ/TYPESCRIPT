"use strict";
let guest = ['maria', 'safia', 'hafsa'];
//for(let i=0; i<guest.length; i++){
//   console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//}
let absent_guest = ('maria');
let new_guest = ('eshu');
guest[0] = new_guest;
//for(let i=0; i<guest.length; i++){
//   console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
//}
console.log(`Mrs. ${absent_guest} is not coming to the party .`);
console.log('Good news ! we  find big table so we are inviting 3 more guests.');
//array me 3 guest or invite kiye hen
guest.unshift('alina');
guest.splice(2, 0, 'maheen');
guest.push('zunera');
//yaha array me 6 logo ko print krwaya he
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n');
}
//sorry kiyahe invite krky mna krny pr
console.log('\nSorry we can not arrange big table ,only two people wil be invited .');
//yha menyguest remove kr diye 6 me sy 4 ko
while (guest.length > 2) {
    let remove_guest = guest.pop();
    console.log(`sorry mrs. ${remove_guest}, you are not invite for dinner.`);
}
//2 bachy howy persons ko invit kiya he
for (let i = 0; i < guest.length; i++) {
    console.log('Dear Mrs. ' + guest[i] + ',\n\nyou are still invite.\n\nTHANK YOU!\n\n');
}
//meny yaha array sy 2 bachy wy persons ko bhi remove krdiya he
guest.splice(0, 2);
console.log(guest);
