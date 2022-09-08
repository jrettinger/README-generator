// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'project',
        type: 'input',
        message: 'What is the name of your project?'
    }, 
    {
        name: 'username',
        type: 'input',
        message: 'What is your GitHub username?'
    },
    {
        name: "url",
        type: "input",
        message: "What is the URL to your GitHub repository?"
      },
    {
        name: 'email',
        type: 'input',
        message: 'What is your email address?'
    },    
    {
        name: 'description',
        type: 'input',
        message: 'Please write a short description of your project.'
    },    

    {
        name: "license",
        type: "checkbox",
        message: "What kind of license does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
