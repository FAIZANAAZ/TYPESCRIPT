//ye nichy wala likhna zarori he inquirer ke liye
import inquirer from "inquirer";
import chalk from "chalk";
//PRACTICE 1
//ak objest bnay gy

let answers = await inquirer.prompt([{
    name : "age",
    types : "number",
    message : "Enter your age :"

}])

//chalk esy hota he ke hm iski madad sy text ko colour de sky bold italik uderline ka use kr skty hen

console.log(chalk.yellow.bold.underline.italic ("Insha Allah, "+  (60 - answers.age) +" years you will be 60 years old. "))

//PRACTICE 2
console.log(chalk.greenBright ("hello ,") + chalk.blueBright ("world"))
console.log(chalk.bold.italic.redBright("your work is nice"))