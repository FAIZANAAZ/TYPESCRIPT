
let magician : string []=['hurry potter','hermione granger','roon weasley','albus dumledore'];
function copy_array(arr:string[]){
   return [...arr]
}

function make_great(magicianarray:string[]){

for(let i=0; i<magicianarray.length;   i++){
    magician [i]=  'the great ' +  magicianarray[i]
}}

function show_magician(magicians:string []){

    magicians.forEach(element => {
       console.log(element);
        
    });
}

const copymagicianarray =copy_array(magician )

make_great( copymagicianarray);
console.log('this is my orignal array:');

show_magician(magician)

console.log('\n\n this is my modfied copy of the  array:');

show_magician(copymagicianarray)