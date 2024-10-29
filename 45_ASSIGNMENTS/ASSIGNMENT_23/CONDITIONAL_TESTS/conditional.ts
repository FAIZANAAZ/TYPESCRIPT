//write a series of conditional test.

//creaating a  car variable 
let car :string ='subaru' ;
//=== sy hm cheq kr rhy hen ke sahi he ya nhi (test 1)
console.log("is car === 'subaru'? i predict true.");
console.log(car === 'subaru');

//== sy hm cheq kr rhy hen ke sahi he ya nhi (test 2)
console.log("is car == 'subaru'? i predict true.");
console.log(car == 'subaru');

//=! sy hm cheq kr rhy hen ke sahi he ya nhi (test 3)(!=)=note equal to
console.log("is car !='honda'? i predict true.");
console.log(car != 'honda');


//==!sy hm cheq kr rhy hen ke sahi he ya nhi (test 4)
console.log("is car !=='ford'? i predict true.");
console.log(car !== 'ford');

//== uppercase sy hm cheq kr rhy hen ke sahi he ya nhi (test 5)
console.log("is car.Upper case =='SUBARU'? i predict true.");
console.log(car.toUpperCase() == 'SUBARU');


//lower case sy hm cheq kr rhy hen ke sahi he ya nhi (test 6)
console.log("is car.lower case =='Subaru'? i predict false.");
console.log(car.toLowerCase() == 'Subaru');

//lower case sy hm cheq kr rhy hen OPERCASE ME LIKH KR TO FALE HI AYGA ke sahi he ya nhi (test 7)
console.log("is car.lower case ==='SUBARU'? i predict false.");
console.log(car.toLowerCase() === 'SUBARU');


//(test 8)
console.log("is car ==='train'? i predict false.");
console.log(car === 'train');

//(test 9)
console.log("is car ==='BUS'? i predict false.");
console.log(car === 'BUS');

//(test 9)
console.log("is car ==='CYCLE'? i predict false.");
console.log(car === 'CYCLE');










