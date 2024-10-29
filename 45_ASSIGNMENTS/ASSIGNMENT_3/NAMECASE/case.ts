let personname2 :string = "Faiza Nazz";
//lowercase
console.log( personname2.toLowerCase());
//uppercase
console.log(personname2.toUpperCase());
//titlecase
console.log(personname2.replace(/\b\w/g , c=> c.toUpperCase()));