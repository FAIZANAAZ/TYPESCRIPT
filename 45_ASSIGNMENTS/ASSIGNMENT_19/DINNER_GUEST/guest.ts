import { Console } from "console";

let guest :string[]=['maria','safia','hafsa'];
let absent_guest :string=('maria');

let new_guest :string=('eshu');

guest [0]=new_guest;

guest.unshift('alina');
guest.splice(2 , 0 , 'maheen');
guest.push('zunera');

while(guest.length > 2){
   let remove_guest= guest.pop();
}
guest.splice(0 ,2);
console.log(guest);

console.log(`total number of gest are : ${guest.length}`);






