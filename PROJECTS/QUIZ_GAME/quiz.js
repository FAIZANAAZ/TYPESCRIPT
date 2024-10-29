#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.clear();
let namee = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.bold.yellow("\nWHAT IS YOUR NAME ❔ ")
});
console.log(chalk.bgGreenBright.bold.underline(`\n\t****** 🤗 WELCOME ${namee.name} IN QUIZ GAME 🤗 ********\n`));
//-------------------------- VARIABLES -------------------------------
let condition = true;
let total_quations = 0;
let right_score = 0;
let wrong_score = 0;
//-------------------------- API CALL -------------------------------
try {
    while (condition) {
        let quiz = await fetch("https://opentdb.com/api.php?amount=1&category=18&difficulty=easy&type=boolean")
            .then((p) => p.json());
        let api_show = quiz.results[0].question;
        let correct_ans = quiz.results[0].correct_answer;
        let quation1 = await inquirer.prompt({
            name: "q1",
            type: "confirm",
            message: api_show
        });
        if (correct_ans === 'True' && quation1.q1 === true) {
            console.log(chalk.bold.magenta("\n\tCORRECT ANSER ✅ "));
            ++right_score;
            ++total_quations;
        }
        else if (correct_ans === 'False' && quation1.q1 === false) {
            console.log(chalk.bold.magenta("\n\tCORRECT ANSER ✅ "));
            ++right_score;
            ++total_quations;
        }
        else if (correct_ans === 'False' && quation1.q1 === true) {
            console.log(chalk.bold.red("\n\tWRONG ANSER ❌ "));
            ++wrong_score;
            ++total_quations;
        }
        else if (correct_ans == 'True' && quation1.q1 === false) {
            console.log(chalk.bold.red("\n\tWRONG ANSER ❌ "));
            ++total_quations;
            ++wrong_score;
        }
        let confirmm = await inquirer.prompt({
            name: "con",
            type: "confirm",
            message: chalk.bold.yellow("\nDO YOU WANT TO PLAY AGAIN ❔\n")
        });
        if (confirmm.con === false) {
            condition = false;
        }
    }
    //-------------------------- RESULT -------------------------------
    console.log(chalk.green.italic.bold.underline(`
    ******************************************************************************

                             🎀 YOUR QUIZ RESULT 🎀

    TOTAL QUATIONS = ${total_quations}

    RIGHT QUATIONS = ${right_score} ✅

    WRONG QUATIONS = ${wrong_score} ❌

    ******************************************************************************`));
}
catch (error) {
    console.log(error);
}
