#! /usr/bin/env node


import inquirer from "inquirer";

import chalk from "chalk";

let answer = await inquirer.prompt([
  {
    message: chalk.bold.bgBlueBright("Please Enter Your First Number"),
    type: "number",
    name: "firstNumber",
  },
  {
    message: chalk.bold.bgCyan("Please Enter Your Second Number"),
    type: "number",
    name: "secondNumber",
  },
  {
    message: chalk.bold.bgGray("Please Enter Your Operator to perform operation"),
    type: "list",
    name: "Operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division","Exponentiation","Modulus"],
  },
  
]);
if (answer.Operator === "Addition") {
  console.log(chalk.bold.red(`${answer.firstNumber + answer.secondNumber}`));
} 
else if (answer.Operator === "Subtraction") {
  console.log(chalk.bold.yellowBright(`${answer.firstNumber - answer.secondNumber}`));
}
 else if(answer.Operator === "Multiplication"){
  console.log(chalk.bold.blueBright(`${answer.firstNumber * answer.secondNumber}`));
} 
else if (answer.Operator === "Division") {
  console.log(chalk.bold.green(`${answer.firstNumber / answer.secondNumber}`));
}
else if (answer.Operator === "Exponentiation") {
  console.log(chalk.bold.cyanBright(`${answer.firstNumber ** answer.secondNumber}`));
}
else if (answer.Operator === "Modulus") {
  console.log(chalk.bold.black(`${answer.firstNumber % answer.secondNumber}`));
}
else {
  console.log("please Enetr Volid Operator");
}

