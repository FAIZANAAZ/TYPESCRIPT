#!/usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// let todo_list = [];
// let condition = true;
// console.log(
//   chalk.bgRedBright(
//     "\n\t" + "WELCOME IN FAIZA-NAAZ TODO_LIST APP" + "\n"
//   )
// );
// while (condition  ) {
//   let todooption = await inquirer.prompt([
//     {
//       name: "option",
//       type: "list",
//       message: "select one option!",
//       choices: ['Add','Reamove']
//     }
//   ]);
// //.....................add..............
//   if(todooption.option ==='Add' ){
//     let select =await inquirer.prompt([{
//       name: "task",
//       type: "input",
//       message: "Enter  sometging your task list!",
// }])
//    if (select.task !== ""){
//  todo_list.push(select.task)
//  console.log(
//   chalk.blue(`\n\t ${select.task} Task ! Added in Todo-list  successfully \t\n `));
// console.log(todo_list);
//   }else {
//     console.log(chalk.bgRed(`\n\t please Add something in your todo list`));
//   }}
//  //.......................remove.............
//   else if(todooption.option ==='Reamove' ){
//       let removechoice = await inquirer.prompt([{
//         name: "removeitem",
//         type: "list",
//         message: "What do you want to remove!",
//         choices: todo_list
//   }]);
//   let index_to_remove = todo_list.indexOf(removechoice.removeitem)
// if(index_to_remove >= 0){
//   todo_list.splice( index_to_remove,1);
//   console.log("\n\t"+"You remove :" ,chalk.bgRed (removechoice.removeitem));
//   console.log(todo_list);
//   }
// }
// //..............confirm.............
// let user_ans = await inquirer.prompt([{
//   name:'selection',
//   type:'confirm',
//   message: 'Do you want to continue?',
//   default:true
// }]);
// if(user_ans.selection === false){
//    condition = false;
//    console.log(chalk.bgGreen("\n\t"+'Your updated Todo List '), todo_list);
// }
// }
import inquirer from "inquirer";
import chalk from "chalk";
let namee = await inquirer.prompt({
    name: "num",
    message: chalk.bold.red("\nWHAT IS YOUR NAME ❔ "),
    type: "input"
});
console.log(chalk.italic.bgMagentaBright.bold(`\n\t 🎀 WELCOM TO TODO_LIST ${namee.num} 🤗 \n\t`));
//*****************************************variables************************* */
let show_list = [];
let condition = true;
//********************************LIST SELECT******************************************* */
while (condition) {
    let lisst = await inquirer.prompt({
        name: "choos",
        type: "list",
        message: chalk.bold.red("WHAT DO YOU WANT TO SELECT ❔  \n "),
        choices: ["SHOW LIST", "ADD TASK", "DELET TASK"]
    });
    //*******************************SHOW LIST *************** */
    //${[i +1 ]} <=ye list ko number ke sath set kryga jesy 1_namaz 2_breakfast
    if (lisst.choos === "SHOW LIST") {
        if (show_list.length > 0) {
            console.log(chalk.hex("#0303fc").bold("\tYOUR TASK LIST ⬇⬇ ✅ \n"));
        }
        for (let i = 0; i < show_list.length; i++) {
            let a = `${[i + 1]}_${show_list[i]} `;
            console.log(chalk.hex("#0303fc").bold(a));
        }
        if (show_list.length == 0) {
            console.log(chalk.hex("#0303fc").bold("\n\tYOUR TASK LIST IS EMPTY ⭕ "));
        }
    }
    //*************************************ADD TASK*********************** */
    else if (lisst.choos === "ADD TASK") {
        let adding_list = await inquirer.prompt({
            name: "add",
            type: "input",
            message: chalk.bold.red("\nWHAT DO YOU WANT TO ADD IN YOUR TASK LIST ❔ \n ")
        });
        show_list.push(adding_list.add);
        console.log(chalk.hex("#fc0394").bold(`YOU ADDED ${adding_list.add} IN YOUR TODO LIST \n`));
        console.log(chalk.hex("#0303fc").bold("\tYOUR TASK LIST IS READY ⬇⬇ ✅ \n"));
        for (let i = 0; i < show_list.length; i++) {
            let a = `${[i + 1]}_${show_list[i]} `;
            console.log(chalk.hex("#0303fc").bold(a));
        }
    }
    //*************************************DELETE TASK**************** */
    else if (lisst.choos === "DELET TASK") {
        let delet_list = await inquirer.prompt({
            name: "delet",
            type: "list",
            message: chalk.bold.red("\n WHAT DO YOU WANT TO delet IN YOUR TASK LIST ❔ \n "),
            choices: show_list
        });
        show_list.splice(delet_list.delet, 1);
        console.log(chalk.hex("#fc0394").bold(`\tYOU DELET ${delet_list.delet} IN YOUR TASK LIST\n`));
        console.log(chalk.hex("#0303fc").bold("\tYOUR TASK LIST IS READY ⬇⬇ ✅ \n"));
        for (let i = 0; i < show_list.length; i++) {
            let a = `${[i + 1]}_${show_list[i]} `;
            console.log(chalk.hex("#0303fc").bold(a));
        }
    }
    //***************************** user confirmation***************************** */
    let confirmation = await inquirer.prompt({
        name: "con",
        type: "confirm",
        message: chalk.bold.red("\nYOU WANT TO CONTINUE YOUR TASK LIST ❔ \n"),
        default: true
    });
    if (confirmation.con === false) {
        condition = false;
    }
}
console.log(chalk.italic.bgMagentaBright.bold(`\n\t 🎀 THANKS FOR USING TODO_TASK_LISK ${namee.num} 🎀`));
