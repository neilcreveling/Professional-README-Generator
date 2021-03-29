const fs = require('fs');
const inquirer = require('inquirer');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Description',
        message: 'Please provide a description.',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Please provide installation instructions.',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Please provide usage instructions.',
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Please provide contribution guidelines.',
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Please provide test instructions.',
      },
      {
        type: 'list',
        name: 'License',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };