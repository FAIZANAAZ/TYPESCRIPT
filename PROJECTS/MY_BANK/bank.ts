#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.clear();


//***************** customar personal information************************ */
let condition = true

while(condition){
let quation1 =await inquirer.prompt([{
    name : "fname",
    type : "input",
    message : chalk.bold.green("\nENTER YOUR FIRST NAME ❓❔ \n")
},

{
    name : "lname",
    type : "input",
    message : chalk.bold.green("ENTER YOUR LAST NAME ❓❔ \n")
},
{
    name : "age",
    type : "input",
    message : chalk.bold.green("ENTER YOUR AGE & AGE SHOULD BE GREATER THAN 10 ❓❔ \n")
},
{
    name : "gender",
    type : "list",
    message : chalk.bold.green("SELECT YOUR GEDER ❓❔ \n"),
    choices : ["MALE" , "FEMALE"]
},
{
    name : "mobile",
    type : "number",
    message : chalk.bold.green("ENTER YOUR MOBILE NUMBER WITHOUT 0 ❓❔\n"),

},

{
    name : "nic",
    type : "input",
    message : chalk.bold.green("ENTER YOUR CNIC NUMBER WITHOUT (-)❓❔ \n")
},
{
    name : "account",
    type : "input",
    message : chalk.bold.green("ENTER YOUR BANK_ACCOUNT NUMBER ❓❔ \n")
}


])

//***************** FORMATE FUNCTION FOR NIC - ************************ */

function FORMAT_NIC(nicc:string):string {
    return `${nicc.slice(0,5)}-${nicc.slice(5,12)}-${nicc.slice(12)}`
    
}

if(quation1.fname!=="" && quation1.lname!=="" &&
    quation1.mobile>999999999 && quation1.mobile<99999999999 &&
    quation1.nic>999999999999 && quation1.nic<99999999999999 && quation1.age>10){

//***************** CORRECT WRITE NUMBER AND NIC ************************ */
   
quation1.nic=FORMAT_NIC(quation1.nic)
quation1.mobile=`+92 0${quation1.mobile}`



//*************** INTERFACE FOR MYBANK CLASS (UNIMPORTANT )**************** */

interface Ibankaccount {
    debit : (amount : number)=>string;
    credit : (amount : number)=>string
}

// **************** COSTOMER DATA ***************************/

class Customer {
   first_name: string
   last_name : string
   gaender : string 
   age : number
   mobile_number : number 
   cnic_number : number 
   bankaccount_number : number

    constructor(first_name: string , last_name : string , gaender : string ,  age : number , mobile_number : number ,
        cnic_number : number ,    bankaccount_number : number) {

            this.first_name = first_name
            this.last_name  = last_name
            this.gaender =  gaender
            this.age = age
            this.mobile_number = mobile_number
            this.cnic_number = cnic_number
            this.bankaccount_number =  bankaccount_number
    }
    
    show_detail (){
      
        return `\n********************************************************************************************
NAME          : ${quation1.fname}${quation1.lname}
AGE           : ${quation1.age}
GENDER        : ${quation1.gender}
MOBILE_NUMBER : ${quation1.mobile}
CNIC_NUMBER   : ${quation1.nic}
ACOUNT_NUMBER : ${quation1.account}

*********************************************************************************************\n`
    }  }

//**************** bankaccount for debit and cedit ****************** */

class Banaccount implements Ibankaccount{

    account_balance : number 

    constructor (account_balance : number ){
        
    this.account_balance = account_balance  
    }
      
    debit(amount: number){

        let statment = ""
         
        if (amount < this.account_balance) {
                 
            if (amount >0) {


                     
                this.account_balance -= amount

                --this.account_balance

                statment = `\n          TRANSACTION SUCCESSFUL 

                1 RUPES CUT FOR TEX

                YOUR NEW BALANCE IS ${this.account_balance}
                \n`
                
            } 
            
        }else if (amount===this.account_balance){

            this.account_balance -= amount

            statment = `\nYOU DEBIT FULL AMOUNT SO 

            NOW YOUR ACCOUNT BALANCE IS ${this.account_balance}\n`

        }else if (amount > this.account_balance){

            console.log("\nSORRY ! YOUR ACCOUNT DOES NOT HAVE SUFFICIENT AMOUNT  ❌ \n");
            
        }


    
        return statment
    }

    credit (amount: number){

        let statment2 = ""
           
        if (amount > 0) {

            this.account_balance += amount

            statment2 = `\n       YOUR ACCOUNT HAS BEEN CREDITED SUCCESSFULLY ! 

            NOW YOUR ACCOUNT_BALANCE IS ${this.account_balance} \n`
        
        }

        return statment2
    }

}
//***************** CUSTOMER INSTANCE ************************ */

let customer = new Customer (quation1.fname ,quation1.lname , quation1.age , quation1.gender,quation1.mobile,quation1.nic
    ,quation1.account
)

console.log(chalk.yellow.bold(customer.show_detail()));

//****************** quations for debit credit  && BANKACCOUNT INSTANCE*********************** */

let quation5 =await inquirer.prompt({
    name : "balance",
    type : "number",
    message : chalk.bold.green("PLEASE FIRSTLY ADD SOME AMOUNT & AMOUNT SHOULD BE GREATER THAN OR EQUAL 100 💸 \n"),
   
})
if (quation5.balance>=99) {

let quation2 =await inquirer.prompt({
    name : "chos",
    type : "list",
    message : chalk.bold.green("SELECT ANY ONE ❓❔ \n"),
    choices : ["DEBIT_AMOUNT" , "CREDIT_AMOUNT"]
})

let mybank = new Banaccount(quation5.balance)

console.log(chalk.bold.magenta(mybank.account_balance))

if (quation2.chos==="DEBIT_AMOUNT") {
    let quation3 = await inquirer.prompt([{
       name : "debit" ,
       type : "number",
       message : chalk.bold.green("ENTER YOUR DEBIT AMMOUNT 💸 \n")

    }]
)

    


console.log(chalk.bold.magenta(mybank.debit(quation3.debit)))}


 if (quation2.chos==="CREDIT_AMOUNT") {

      let quation4 = await inquirer.prompt({
       name : "credit" ,
       type : "number",
       message : chalk.bold.green("ENTER YOUR CREDIT AMMOUNT 💸 \n")

    })

    
console.log(chalk.bold.magenta(mybank.credit(quation4.credit)));
  
}
}else{
    console.log(chalk.bold.red("\n\tSORRY ! YOU CAN NOT BE ADDED  LESS THEN 100 RUPES ❌ \n "));
    
}}else{
    console.log(chalk.bold.red("\n\tPLEASE ENTER VALID INFORMATION ❌ \n"));
    
}
//****************************** FOR CONFIRMATION ******************************** */
let quation6 = await inquirer.prompt({
    name : "con",
    type : "confirm",
    message : chalk.bold.green("DO YOU WANT TO  DEBIT OR CREDIT THE AMOUNT AGAIN 💸 ")

}
)
if (quation6.con===false) {
    condition =false
    
}


}

console.log(chalk.bold.yellow("\n 💛 *********************************** THANKS FOR USING ****************************** 💛 "));
