#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let answer = await inquirer_1.default.prompt([
    {
        message: chalk_1.default.bold.bgBlueBright("Please Enter Your First Number"),
        type: "number",
        name: "firstNumber",
    },
    {
        message: chalk_1.default.bold.bgCyan("Please Enter Your Second Number"),
        type: "number",
        name: "secondNumber",
    },
    {
        message: chalk_1.default.bold.bgGray("Please Enter Your Operator to perform operation"),
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "Exponentiation", "Modulus"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(chalk_1.default.bold.red(`${answer.firstNumber + answer.secondNumber}`));
}
else if (answer.Operator === "Subtraction") {
    console.log(chalk_1.default.bold.yellowBright(`${answer.firstNumber - answer.secondNumber}`));
}
else if (answer.Operator === "Multiplication") {
    console.log(chalk_1.default.bold.blueBright(`${answer.firstNumber * answer.secondNumber}`));
}
else if (answer.Operator === "Division") {
    console.log(chalk_1.default.bold.green(`${answer.firstNumber / answer.secondNumber}`));
}
else if (answer.Operator === "Exponentiation") {
    console.log(chalk_1.default.bold.cyanBright(`${answer.firstNumber ** answer.secondNumber}`));
}
else if (answer.Operator === "Modulus") {
    console.log(chalk_1.default.bold.black(`${answer.firstNumber % answer.secondNumber}`));
}
else {
    console.log("please Enetr Volid Operator");
}
