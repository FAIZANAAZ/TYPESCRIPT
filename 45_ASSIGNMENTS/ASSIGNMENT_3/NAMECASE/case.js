"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personname2 = "Faiza Nazz";
//lowercase
console.log(personname2.toLowerCase());
//uppercase
console.log(personname2.toUpperCase());
//titlecase
console.log(personname2.replace(/\b\w/g, c => c.toUpperCase()));
