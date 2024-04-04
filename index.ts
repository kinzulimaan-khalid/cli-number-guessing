#! /usr/bin/env node 
import inquirer from "inquirer";

const randomNumber= Math.floor(Math.random() * 6 + 1);

const answers = await inquirer.prompt([
    {
    name: "userGuessdNumber",
    type: "number",
    message: "Please guess a number",
},

]);

if (answers.userGuessdNumber === randomNumber) {
    console.log("Congratulations! You guessed right number.");
}else {
    console.log("You guessed wrong number.");
}