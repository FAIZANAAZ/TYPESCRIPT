#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.clear();
//****************************************************************************************** */
let condition = true;
while (condition) {
    let quition1 = await inquirer.prompt({
        name: "name1",
        type: "input",
        message: chalk.bold.red("\nWHAT IS YOUR NAME ❔"),
    });
    console.log(chalk.bold.yellowBright(`\n\t\t 🎀 ********** WELCOME ${quition1.name1} ************* 🎀 `));
    let quition2 = await inquirer.prompt({
        name: "meg1",
        type: "number",
        message: chalk.bold.red("\nIF YOU ARE TALKATIVE PERSONALITY TYPE (1) 😀 ,IF YOU DONT LIKE TO TALK TYPE (2) 🤐 "),
    });
    class Person {
        personality = "";
        constructor(personality) {
            if (personality != "") {
                this.personality = personality;
            }
        }
        condition(val) {
            if (val === 1) {
                this.personality = "EXTROVERT";
            }
            else if (val === 2) {
                this.personality = "INTROVERT";
            }
            else {
                this.personality = "MYSTERY";
            }
        }
    }
    class Student extends Person {
        _myname = "NO NAME";
        constructor(personality) {
            super(personality);
        }
        get myname() {
            return this._myname;
        }
        set myname(namee) {
            if (namee != "") {
                this._myname = namee;
            }
        }
    }
    let person = new Person("");
    person.condition(quition2.meg1);
    let student = new Student("");
    student.myname = quition1.name1;
    console.log(chalk.bold.magenta(`\n\t\t\tHI!! ${student.myname} 

******************** 😎 YOU HAVE ${person.personality} PERSONALIITY 😎 *******************`));
    let quition3 = await inquirer.prompt({
        name: "con",
        type: "confirm",
        message: chalk.bold.red("\n DO want to continue ❔")
    });
    if (quition3.con === false) {
        condition = false;
        console.log(chalk.bold.yellowBright("\n\t\t\t 🎀 THANKS FOR USING 🎀 "));
    }
}
