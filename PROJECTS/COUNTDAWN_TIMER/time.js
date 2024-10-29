#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.clear();
//         Quations   *********************************************************************************
confirmm();
async function confirmm() {
    let quation1 = await inquirer.prompt([{
            name: "chose",
            type: "list",
            message: chalk.bold.yellow("\nWHAT WOULD YOU LIKE TO KNOW ABOUT ❔ "),
            choices: ["WEDDING CERMONY", "BIRTHDAY", "OTHERS"]
        }]);
    if (quation1.chose === "OTHERS") {
        let namee = await inquirer.prompt({
            name: "other",
            type: "input",
            message: chalk.bold.yellow("\nENTER THE NAME OF WHICH YOU WANT TO KNOW DATE AND TIME ❔ ")
        });
        console.log(chalk.bold.magenta("\n\t*********************", (namee.other).toUpperCase(), "*********************\n"));
    }
    let quation2 = await inquirer.prompt([{
            name: "q1",
            type: "number",
            message: chalk.bold.red("\nENTER THE YEAR IN THE FORM OF NUMBER ❔ ")
        }, {
            name: "q2",
            type: "number",
            message: chalk.bold.red("\nENTER THE MONTH IN THE FORM OF NUMBER ❔ ")
        },
        { name: "q3",
            type: "number",
            message: chalk.bold.red("\nENTER THE DATE IN THE FORM OF NUMBER ❔ ") }]);
    //     variables ***************************************************************************
    let year = quation2.q1;
    let monthh = quation2.q2;
    let date = quation2.q3;
    let full_date = `${String(year)}-${String(monthh).padStart(2, "0")}-${String(date).padStart(2, "0")}T00:00:00`;
    //    TIMEER  ******************************************************************************
    let timmer = setInterval(() => {
        //    DATE CLASS **************************************************************************** 
        //ye wo date hogi jo user set kry ga or wha tk hm date ko count kry gy
        let date_2024 = new Date(full_date);
        //ye aj ki date hogi
        let today_date = new Date();
        //ye - kryga any wali date sy aj wali date ko
        let difference = date_2024.getTime() - today_date.getTime();
        //ye days btayga ke event any me kitny din rh gay
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        //ye event tk ke hurse btayga
        let hours = Math.floor(difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        //ye event tk ke minutes btayga
        let minutes = Math.floor(difference % (1000 * 60 * 60) / (1000 * 60));
        //ye event tk ke seconds btayga
        let seconds = Math.floor(difference % (1000 * 60) / (1000));
        if (seconds > 0) {
            console.log(chalk.bold.magenta(`\n\tDAYS : ${days}  - HOURS : ${hours} - MINUTES : ${minutes} - SECONDS ${seconds} - LEFT !!\n`));
            console.log(chalk.bold.green("\n\t\t****************************** 🕕 🕗 🕦 **********************************\n"));
        }
        //  FOR  TIMEER STOP ***********************************************************************************
        if (seconds <= 59) {
            clearInterval(timmer);
            if (seconds > 0) {
                after_run();
            }
        }
        //  FOR  PAST TIME STOP ***********************************************************************************
        if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
            clearInterval(timmer);
            console.log(chalk.bold.magenta(`\n\tits has passed ${days} days${hours} hours ${minutes} minutes ${seconds} seconds `));
            console.log(chalk.bold.magenta("\n\t\t\t\tTIME UP"));
            console.log(chalk.bold.green("\n\t**************************** 🕕 🕗 🕦 *****************************"));
            after_run();
        }
    }, 1000);
}
async function after_run() {
    let namee2 = await inquirer.prompt({
        name: "con",
        type: "confirm",
        message: chalk.bold.red("\n DO YOU WANT TO KNOW THE DATE AND TIME OF ANYTHING ELSE ❔ ")
    });
    if (namee2.con === true) {
        confirmm();
    }
    else {
        console.log(chalk.bold.yellow("\n\t************************** THANKS FOR USING ************************** "));
    }
}
