#! /usr/bin/env node
import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  {
    message: "Enter your First Number",
    type: "number",
    name: "FirstNumber",
  },
  {
    message: "Enter your second Number",
    type: "number",
    name: "SecondNumber",
  },
  {
    message: "Select your required operator",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

if (answer.Operator === "Addition") {
  console.log(answer.FirstNumber + answer.SecondNumber);
} else if (answer.Operator === "Subtraction") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.Operator === "Multiplication") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.Operator === "Division") {
  console.log(answer.FirstNumber / answer.SecondNumber);
} else {
  console.log("Enter valid Operator");
}

