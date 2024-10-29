"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//ye nichy wala likhna zarori he inquirer ke liye
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
//PRACTICE 1
//ak objest bnay gy
let answers = await inquirer_1.default.prompt([{
        name: "age",
        types: "number",
        message: "Enter your age :"
    }]);
//chalk esy hota he ke hm iski madad sy text ko colour de sky bold italik uderline ka use kr skty hen
console.log(chalk_1.default.yellow.bold.underline.italic("Insha Allah, " + (60 - answers.age) + " years you will be 60 years old. "));
//PRACTICE 2
console.log(chalk_1.default.greenBright("hello ,") + chalk_1.default.blueBright("world"));
console.log(chalk_1.default.bold.italic.redBright("your work is nice"));
