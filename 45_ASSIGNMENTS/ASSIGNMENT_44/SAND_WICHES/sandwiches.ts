import { log } from "console";

function sandwiches (item:string[]){
    console.log('\nMaking your sanwich with :');

    item.forEach(element=>console.log('- ' + element)
    );
    console.log('\nEnjoy your sandwich !');
    
    
}

sandwiches (['Han','chese','lattuce']);

sandwiches (['Turkey','Bacan','lattuce']);

sandwiches (['Peanut butter','Jelly']);