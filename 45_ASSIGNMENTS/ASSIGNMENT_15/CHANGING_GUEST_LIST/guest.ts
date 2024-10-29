//Changing Guest List: You just heard that one of your guests can’t make the dinner,
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

//• Start with your program from Exercise 14. Add a print statement at the end of 
//your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with 
//the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let guest :string[]=['maria','safia','hafsa'];

for(let i=0; i<3; i++){
    console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')

}

let absent_guest :string=('safia');

let new_guest :string=('eshu');

guest [1]=new_guest;

for(let i=0; i<3; i++){
    console.log('Dear Mrs. ' + guest [i] +',\n\nIt is our pleasure to invite you in our party.\n\nTHANK YOU!\n\n')
}

console.log(`Mrs. ${absent_guest} is not coming to the party .`)
