// external packages
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// internal packages
const usernameAPI = require('./utils/username-api.js');


// user prompts
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Please provide a title.',
      },        
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions.',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions.',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines.',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions.',
      },
      {
        type: 'list',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
        message: 'Enter your LinkedIn URL.',
      },
      {
        type: 'input',
        name:'github',
        message: 'Please provide your GitHub profile name.',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
      },
    ]);
  };

  // function to write README file
  function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, err => {
          if (err) {
              return console.log(err);
          }
          console.log('Success!')
      });
  }