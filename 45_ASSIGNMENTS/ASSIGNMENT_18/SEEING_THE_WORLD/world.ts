//store the locations in a array.make sure the array is not in alphabetical order.
let places :string[]=['pakistan', 'india','amrica','bangladesh','turki'];

//print your array in its original order.
console.log('orignal'+ places);

//print your array in alphabetical order without modifying the actual list.
console.log('copy '+[...places].sort());

//show that your array is still in its orignal order ny printing it,
console.log('orignal'+places);

//print your array in reverse alphabetical order  witout chaning the orderof the orignal list.
console.log('copy '+[...places].sort().reverse());

//show that your array is still in its orignal order by printing it agai.
console.log('orignal'+places);

//reverse the order of your list . print the array to show that its order hus changged.
console.log('orignal'+places.reverse());

//reverse the order of your list again .print the list to show its back to its original order.
console.log('orignal'+places.reverse());

//sort your array so its stored in alphabetical order .print the array to show that 
//its order has been changes.
console.log('orignal'+places.sort());

//sort to chang your array so its stored in reverse alphabetical order. print the list to show that 
//its order has changed.
console.log('orignal'+places.sort().reverse());
