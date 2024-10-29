import inquirer from "inquirer"
import chalk from "chalk"
//.........welcom message simple.............. */

console.log( chalk.bold.italic.magentaBright

    ("\n\t 🎀 ******************* WELCOM IN WORDS $ CHARACTERS COUNTER APPLICATION ***************** 🎀 \n\t"));

//................variable for confermation to do while loop..................
let condition = true

//............quation choise ["CHARACTERS", "WORDS"] .............//

do {
    
 let choos= await inquirer.prompt ([{

    name :"firstly",
    type : "list",
    message : chalk.bold.red("\n YOU WANT TO KNOW THE LENGTH OF WORDS OR CHARATERS IN YOUR SENTENCE ❔ \n"),
    choices :["CHARACTERS", "WORDS"]

}])

//...............characters.........//

if (choos.firstly==="CHARACTERS") {
    

let quation  =await inquirer.prompt([{

   name : "ans",
   type : "output",
   message :  chalk.bold.red("\nWRITE YOUR SENTENCE ❔ \n")

}])

//join ko join krny ke liye tring me () "" inverted comas dena prhty hen

 let count = quation.ans.trim().split(" ").join("").length

if (quation.ans!=="") {

    console.log(chalk.hex("#4287f5").bold(`\n\t ➖➖ YOUR CARRECTORS LENGTH IS ${count} ➖➖\n\t`))}
      
}
 
//......................words................


else if (choos.firstly==="WORDS") {
    

    let quation2  =await inquirer.prompt([{
       name : "words",
       type : "output",
       message : chalk.bold.red("WRITE YOUR SENTENCE ❔ \n")
    
    }])

    //.filter ka use hmny isi liye kiya he taky wo space ko count na kry jismy hmny likha he ke esy words
    //ko lana jiski length 0 sy bari ho or space ki lenth 0 hoti he

let count2 = quation2.words.trim().split(" ").filter((e:any)=>e.length>0).length

 if (quation2.words!=="") {

        console.log(chalk.hex("#4287f5").bold(`\n\t ➖➖ YOUR WORDS LENGTH IS ${count2} ➖➖ \n\t`))}
        
        
    }
 
    //..................confirm messAGE...................
    let last_quation =await inquirer.prompt({

        name : "con",
        type : "confirm",
        message : chalk.bold.yellow("\n DO YOU WANT TO CONTINUE APPLICATION ❔ ")
    })

    if (last_quation.con===false) {
        
        condition = false

    } } while (condition)
    
   //...........thanks message after using app.............

console.log(chalk.bold.italic.magentaBright("\n\t 🎀 **************** THANKS FOR USING APPLICATION ************ 🎀 \n\t"));
