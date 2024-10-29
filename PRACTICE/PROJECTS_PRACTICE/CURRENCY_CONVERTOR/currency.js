import inquirer from "inquirer";
import chalk from "chalk";
//api ko hm sahi sy samj skty hen jesy ismy phly kiya he object he phir function taky hm .lga kr acces kr sken
//or ye hm ak web pr jakr kr skty hen (jsonformatter.org) than upload data then url enter
console.log(chalk.underline.bold.bgMagentaBright("\n\t**************** 💖 WELCOME IN CURRENCY CONVERTOR APP 💖 ***************  \n\t"));
try {
    //**************************************api */
    let api_data = await fetch("https://v6.exchangerate-api.com/v6/4d2390f40978b1ef431fc4d9/latest/USD").then((p) => p.json());
    // srif currency ko liya baqi ka data scip kr diya 
    let simple_api = api_data.conversion_rates;
    // console.log(simple_api);
    //********api ki properties ko choices me deny ke liye variale bnaya he **** */
    let property_currency = Object.keys(simple_api);
    //**************CONDITION FOR WHILE LOOP******************** */
    let condition = true;
    //*********************************start currency convertor work (QUATIONS)***************** */
    while (condition) {
        let quation = await inquirer.prompt([{
                name: "from",
                type: "list",
                message: chalk.green.bold("PLEASE SELECT THE CURRENCY CONVERT FROM ❓❔ \n"),
                choices: property_currency
            },
            {
                name: "to",
                type: "list",
                message: chalk.green.bold("PLEASE SELECT THE CURRENCY CONVERT INTO ❓❔ \n"),
                choices: property_currency
            },
            {
                name: "amount",
                type: "number",
                message: chalk.green.bold("ENTER THE AMOUNT TO CONVERT ❓❔ \n"),
            },
        ]);
        //**************************store quations in variable******************************************* */
        let from_currrency = simple_api[quation.from];
        let to_currency = simple_api[quation.to];
        let amount_currency = quation.amount;
        //********************************formula apply to convert currency************************** */
        let base_currency = amount_currency / from_currrency;
        let result_convert_cureency = base_currency * to_currency;
        console.log(chalk.hex("#f5429b").bold("\t**** 💟 ✅ YOUR RESULT IS :", Math.round(result_convert_cureency), " ✅ 💟 ****\n"));
        //*******************************user conformation ******************************************** */
        let conformation = await inquirer.prompt({
            name: "con",
            type: "confirm",
            message: chalk.green.bold("DO YOY WANT TO  CONVERT MORE CURRENCIES ❓❔ \n")
        });
        if (conformation.con === false) {
            condition = false;
        }
    }
    console.log(chalk.underline.bold.bgMagentaBright("\t**************** 💖 THANKS FOR USING CURRENCY CONVERTOR APP 💖 ***************\n\t"));
}
//*****************agr error ay api me to catch krky dikhade proper******************** */
catch (error) {
    console.error(chalk.bgRed(error));
}
;
