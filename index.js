const fs = require('fs');
const inquirer = require('inquirer');

// user prompts
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'Please provide a title.',
      },        
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
      {
        type: 'input',
        name:'GitHub',
        message: 'Please provide your GitHub profile name.',
      },
      {
        type: 'input',
        name: 'Email',
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