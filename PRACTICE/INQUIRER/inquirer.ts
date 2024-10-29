//ye nichy wala likhna zarori he inquirer ke liye
import inquirer from "inquirer";
//ak objest bnay gy

let answers = await inquirer.prompt([{
    name : "age",
    types : "number",
    message : "Enter your age :"

}])

//inquirer sy ye hoga ke print jb hm krwaygy tb wo phly quation kry ga hm ans krengy
//phir wo console print krega

console.log("Insha Allah, "+  (60 - answers.age) +" years you will be 60 years old. ")