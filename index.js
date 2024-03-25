#! /usr/bin/env Node
import inquirer from "inquirer";
// welcome message 
console.log("welcome to 'AWAIS' simple-calculator");
let answer = await inquirer.prompt([
    { message: "Enter your First Number", type: "number", name: "firstNumber" },
    { message: "Enter your Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select your operation to perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "Division"],
    },
]);
// for checking
// console.log(answer);
// conditions for operations
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("invalid input");
}
