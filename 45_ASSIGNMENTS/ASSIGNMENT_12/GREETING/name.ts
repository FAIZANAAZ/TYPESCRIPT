// Start with the array you used in Exercise 11, but instead of just 
//printing each person’s name, print a message to them. The text of each 
//message should be the same, but each message should be personalized with
// the person’s name.

let names :string[] = ["MARIA ", "SAFIA ", "ESHA", "HAFSA"];
const message :string = "Welcome to typescript class:"

for (let i=0; i<names.length; i++) {

    console.log(message + names[i]);
}

