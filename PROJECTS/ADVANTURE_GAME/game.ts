#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.clear();

//function me inquire ke await ko chalany ke liye async lgana prhta he
//function me isi liye sara code rakha he taky jb confirmation yes ho to game ko again run kiya ja sky
//to dobara pora code na likhna pry bs call krwa den kioky hmy game ko jb tk dobra run nhi krna jb tk koi
//jeet na jay or game ko again blkl start sy run krna hoga 



//************************funtion for plying again***************************************** */
    

async function gamerun (){
    
//***************************WELCOME MESSAGE****************************** */

    console.log(chalk.italic.hex("#eb34eb").bold("\n\t 🤗 --------- Welcome to Adventure Game --------- 🤗 "));

let quation1 = await inquirer.prompt([{
    name : "hero",
    type : "input",
    message : chalk.bold.red("\nWHAT IS YOUR HERO NAME ❔ \n")
},{
    name : "enamy",
    type : "input",
    message :  chalk.bold.red("WHAT IS YOUR ENAMY NAME ❔ \n")}
])
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//******************************************** HERO INFORMATION ************************************************* */

console.log("*******************************************************************************************************\n")

let hero_name = quation1.hero
let hero_power = 100
let hero_health = 100

console.log(chalk.hex("#eb7a34").bold(
`😎 HERO NAME   : ${hero_name}
 HERO POWER  : ${hero_power}
 HERO HEALTH : ${hero_health}`));

console.log("\n*******************************************************************************************************");


//******************************************** ENAMY INFORMATION ************************************************* */
let enamy_name = quation1.enamy
let enamy_power = 100
let enamy_health = 100

console.log(chalk.hex("#eb7a34").bold(
`\n👿 ENAMY NAME   : ${enamy_name}
 ENAMY POWER  : ${enamy_power}
 ENAMY HEALTH : ${enamy_health}\n`));


console.log("*******************************************************************************************************\n")

//******************************************** RANDOM VARIABLES******************************************************* */

let random_hero_power =Math.floor(Math.random()* hero_power +1)
let random_enamy_power =Math.floor(Math.random()* enamy_power +1)


//************************************* VARIABLE ************************************************************ */
 let incriment = 2

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                         
 while (enamy_health > 0 && hero_health > 0) {
    

let quation2 = await inquirer.prompt({
    name : "atack",
    type: "list",
    message :  chalk.bold.red(" PLEASE CHOOSE ANY ONE ❔ \n"),
    choices : ["1 : ATTACK","2 : INCREASE_HEALTH"]

})

//*********************************************** 1 : ATTACK ****************************************************** */
if (quation2.atack ==="1 : ATTACK") {

    enamy_health = enamy_health - random_hero_power
    hero_health = hero_health  - random_enamy_power
    --hero_power
    --enamy_power
 
                   thann()  //FUNCTION CALL

 if (enamy_health <= 0) {
    

    console.log(chalk.italic.hex("#eb34eb").bold("\n\t 👿❌ YOU KILLED ENAMY"));
    console.log(chalk.italic.hex("#eb34eb").bold("\n\t 🏆😀 YOU WIN THE GAME"))}
    
    

else  if (hero_health <= 0) {
    

    console.log(chalk.italic.hex("#eb3440").bold("\n\t ❌😕 YOU LOSS THE GAME"));
    console.log(chalk.italic.hex("#eb3440").bold("\n\t 🐱‍👤🏆 ENAMY WIN THE GAME"));
    
    
}}


//******************************************** " 2 : INCREASE_HEALTH "  ****************************************** */

else if (quation2.atack === "2 : INCREASE_HEALTH") {
    
    if (incriment > 0) {
        
    hero_health=hero_health + 50
    --incriment
    
                         thann()//FUNCTION CALL

    }else{
        console.log("\n2 : INCREASE_HEALTH OPTION IS NOTE AVAILABLE BECAUSE YOU ALREADY USE TWO TIMES\n");
        
    }
}


}

//***********************confirmation for playing game again********** */

let confirmm = await inquirer.prompt({
    name : "con",
    type : "confirm",
    message : chalk.bold.red("\nDO YOU WANT TO PLAY AGAIN ❔ ")
})
if (confirmm.con===true) {
    gamerun()
}else{

/////////////////////////////////////////////////////////////////////////////////////////////////////


//*******************THANKS MESSSAGE******************************************** */

console.log(chalk.italic.hex("#eb34eb").bold("\n\t\t 🤗 Thank you for play this game 🤗 "));}

//*********************************  FUNCTION   ************************************************ */


function thann() {

    if (enamy_health <=0 && hero_health <=0){
       
          hero_health = 1

          
      }
    if(hero_health < 0){
        hero_health = 0
   }
   
    if (enamy_health < 0) {
        enamy_health = 0
   }


console.log("\n*******************************************************************************************************\n");      
    console.log(chalk.hex("#eb7a34").bold(
`👿 NOW ENAMY POWER  : ${enamy_power}
   NOW ENAMY HEALTH : ${enamy_health}\n`))

console.log("*******************************************************************************************************\n");
    
console.log(chalk.hex("#eb7a34").bold(
`😎 NOW HERO POWER  : ${hero_power}
   NOW HERO HEALTH : ${hero_health}`))

console.log("\n*******************************************************************************************************\n")
;}}

//sbsy phly funtion yaha sy run kryga bad me confirm wla 

gamerun()