//inquirer

//npm i inquirer
//npm i --save-dev @types/inquirer

import inquirer from 'inquirer';

let answers = await inquirer.prompt({
    'name' : 'Age',
    'type' : 'number',
    'message' : 'Enter Your Age:'
})

console.log(`After 60 years you will be ${60 - answers.Age} years old!`)

