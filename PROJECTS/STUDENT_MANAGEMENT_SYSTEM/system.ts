#!/usr/bin/env node


import inquirer from "inquirer"
import chalk from "chalk"

console.clear();


class student {
    name : string
    id : number
    course : string
    fees : "paid"| "unpaid"
    balance : string
    constructor(name:string , id : number, course : string,  fees : "paid"| "unpaid" , balance : string ) {
        this.name=name
        this.id = id
        this.course=course
        this.fees= fees
        this.balance=balance
    }
}
 
//************************ VARIABLES ****************** */

let std_name = ""
let std_course = ""
let std_id = 100
let strd_fee :"paid"| "unpaid" ="unpaid"
let std_balance =""
//ismy sary detail class object puch hongy
let std_info_array :any = []
//ismy wali push waly ko store krwaya he or ye array ki length number return krta he isi liye isko catch krwaya he taky 
//isy hm total student ke liye use kr sken
let array_push :any = []
// ismy find ka method ko store kiya taky log krwa kr find ki hoi chizen dikha sken
let show_full_prop : any = []
// ismy class ko call krwaya he (oop )
let class_call :any 

let condition = true

//************************ CHOOSE QUATION ****************** */
do {
    

let quation1 = await inquirer.prompt({
    name :"choose",
    type : "list",
    message : chalk.bold.red("\nPLEASE CHOOSE ANY ONE ❔ \n"),
    choices : ["ENROLL", "CHECK STATUS","TOTAL STUDENTS","REMOVE ENROLL STUDENT","EXIT"]
})

//************************ ENROLL ****************** */
//************************************************** */
//************************************************** */

if (quation1.choose==="ENROLL") {
  let quation2 = await inquirer.prompt([{
    name : "name1",
    type : "input",
    message : chalk.bold.red("\nWHAT IS YOUR NAME ❔ \n"),
    
 

  },
  {
    name : "course",
    type : "list",
    message : chalk.bold.red("\nSELECT YOUR COURSE ❔ \n"),
    choices : ["ARTIFICIAL INTELLIGENCE","AMAZON","GRAPHICS DESIGNING"]
}
])

//*************************** ARTIFICIAL INTELLIGENCE ********************** */

    

if (quation2.course==="ARTIFICIAL INTELLIGENCE") {

    let quation3 = await inquirer.prompt({
        name : "ai",
        type :"confirm",
        message :chalk.bold.yellow("\nDO YOU WANT TO ENROLL (ARTIFICIAL INTELLIGENCE) FOR $10000 ? ❔ \n")

    })

    if (quation3.ai=== true) {
        std_balance = "$10000"
        std_name = quation2.name1
        std_course = quation2.course
        ++std_id
        strd_fee = "paid"

        console.log(chalk.bold.magenta(` 💾 NOTE DAWN YOUR ID CARD NUMBER
                 
                     ${std_id}`));
    }else{
        console.log(chalk.bold.magenta("\nOK BAY\n"));
        
    }
    
}


//*************************** "AMAZON" ********************** */

if (quation2.course==="AMAZON") {

    let quation4 = await inquirer.prompt({
        name : "az",
        type :"confirm",
        message :chalk.bold.yellow("\nDO YOU WANT TO ENROLL (AMAZON) FOR $5000 ❔ \n")

    })

    if (quation4.az=== true) {
        std_balance = "$5000"
        std_name = quation2.name1
        std_course = quation2.course
        ++std_id
        strd_fee = "paid"
        console.log(chalk.bold.magenta(`\n 💾 NOTE DAWN YOUR ID CARD NUMBER 
                
                  ${std_id}`));
    }else{
        console.log(chalk.bold.magenta("\nOK BAY 😊 \n"));
        
    }
    
}

//*************************** "GRAPHICS DESIGNING" ********************** */

if (quation2.course==="GRAPHICS DESIGNING") {

    let quation5 = await inquirer.prompt({
        name : "gd",
        type :"confirm",
        message :chalk.bold.yellow("\nDO YOU WANT TO ENROLL (GRAPHICS DESIGNING) FOR $6000 ❔ \n")

    })

    if (quation5.gd=== true) {
        std_balance = "$6000"
        std_name = quation2.name1
        std_course = quation2.course
        ++std_id
        strd_fee = "paid"
        console.log(chalk.bold.magenta(`\n 💾 NOTE DAWN YOUR ID  CARD NUMBER
            
                     ${std_id}`));
        
    }else{
        console.log(chalk.bold.magenta("\nOK BAY 😊 \n"))
        
    }
    
}
class_call= new student(std_name,std_id,std_course, strd_fee,std_balance)
   array_push =std_info_array.push(class_call) 
  
    
}

//************************  REMOVE ENROLL STUDENT ****************** */
//************************************************** */
//************************************************** */

else if (quation1.choose==="REMOVE ENROLL STUDENT") {
    let name_show2  = std_info_array.map((namee:any)=>namee.name)

   let quation6 = await  inquirer.prompt({
    name : "remove",
    type : "list",
    message:chalk.bold.red("\nSELECT YOUR STUDENT NAME ❔ \n"),
    choices : name_show2

   })

//findindex isi liye lgaya he kioky splice remove krny ke liye index o mangta

  let index = std_info_array.findIndex((studentt:any)=>studentt.name===quation6.remove)
    if(index!==-1) {
    let removed = std_info_array.splice(index,1)
    --array_push
    
     console.log(chalk.bold.green(`\nYOU REMOVE ${removed[0].name} 🚫 \n`));
     
    
 }
}
 
//************************ CHECK STATUS ****************** */
//************************************************** */
//************************************************** */


else if (quation1.choose==="CHECK STATUS")  {

    let name_show  = std_info_array.map((namee:any)=>namee.name)
      let quation7 = await inquirer.prompt ({

        name : "select",
        type : "list",
        message :chalk.bold.red("\nSELECT YOUR STUDENT NAME ❔ \n"),
        choices: name_show
      })

      if (quation7.select) {

        show_full_prop= std_info_array.find((prop:any)=>prop.name===quation7.select)

        console.log(chalk.bold.green(`\t    NAME   : ${show_full_prop.name}
            ID      : ${show_full_prop.id}
            COURSE  : ${show_full_prop.course}
            FEES    : ${show_full_prop.fees}
            BALANCE : ${show_full_prop.balance}`));
        
        
      }
    
}

//************************ "TOTAL STUDENTS ****************** */
//************************************************** */
//************************************************** */

if (quation1.choose==="TOTAL STUDENTS") {

    console.log(`\nTOTAL ENROLL STUDENST ${array_push} 👬 \n`);
    
}


//************************ EXIT ****************** */
//************************************************** */
//************************************************** */
if (quation1.choose==="EXIT") {
    condition = false
    
}}while (condition)

console.log(chalk.bold.yellow("\n\t********************* THANK YOU *************************\n"));
