"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//ye nichy wala likhna zarori he inquirer ke liye
const inquirer_1 = __importDefault(require("inquirer"));
//ak objest bnay gy
let answers = await inquirer_1.default.prompt([{
        name: "age",
        types: "number",
        message: "Enter your age :"
    }]);
//inquirer sy ye hoga ke print jb hm krwaygy tb wo phly quation kry ga hm ans krengy
//phir wo console print krega
console.log("Insha Allah, " + (60 - answers.age) + " years you will be 60 years old. ");
