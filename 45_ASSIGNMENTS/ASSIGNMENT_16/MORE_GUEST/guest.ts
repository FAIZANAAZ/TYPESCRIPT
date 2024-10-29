//More Guests: You just found a bigger dinner table, so now more space is available
// Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your
// program informing people that you found a bigger dinner table.

//• Add one new guest to the beginning of your array.

//• Add one new guest to the middle of your array. • Use append() to add one new guest to 
//the end of your list. • Print a new set of invitation messages, one for each person in your list.


let guest :string[]=['maria','safia','hafsa'];

let absent_guest :string=('maria');

let new_guest :string=('eshu');

guest [0]=new_guest;

for(let i=0; i<guest.length; i++){
    console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
}

console.log(`Mrs. ${absent_guest} is not coming to the party .`);
console.log('Good news ! we  find big table so we are inviting 3 more guests.');

guest.unshift('alina');
guest.splice(2 , 0 , 'maheen');
guest.push('zunera');

for(let i=0; i<guest.length; i++){
    console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
}




