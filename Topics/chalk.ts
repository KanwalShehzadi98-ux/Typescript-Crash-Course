//chalk

//npm i chalk

import inquirer from 'inquirer';
import chalk from 'chalk';

let answers = await prompt.inquirer({
    'name' : 'age',
    'type' : 'number',
    'message' : 'Enter your age:'
}) 

console.log(chalk.blue(`After 60 years you will be ${60 - answers.Age} years old!`))