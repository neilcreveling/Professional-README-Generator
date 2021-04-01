// external packages
const fs = require('fs');
const util = require('util');
const inquirer = require('inquirer');

// create writeFile function using promises instead of callbacks
const writeFileAsync = util.promisify(fs.writeFile);

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

  if (userResponse.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  
  if (userResponse.license === 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  if (userResponse.license === 'GPL') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
  }

  if (userResponse.license === 'BSD') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }

 const generateREADME = (userResponse) =>
    `## ${userResponse.title}
    \n
    ${userResponse.description}
    \n
    ${licenseBadge}
    \n
    ## Table of Contents
    \n
    * Installation
    \n
    * Instructions
    \n
    * Contributors
    \n
    * Tests
    \n
    * Contact
    \n
    # Installation
    \n
    ${userResponse.installation}
    \n
    # Instructions
    \n
    ${userResponse.usage}
    \n
    # Contributing
    \n
    ${userResponse.contributing}
    \n
    # Tests
    \n
    ${userResponse.tests}
    \n
    # License
    \n
    This project is licensed under the ${userResponse.license} license.
    \n
    # Contact
    \n
    [${userResponse.github}](github.com/${userResponse.github})
    \n
    ${userResponse.email}`


  const init = () => {
      promptUser()
        .then((userResponse) => writeFileAsync('README.md', generateREADME(userResponse)))
        .then(() => console.log("Success!"))
        .catch((err) => console.error(err))
  }

    init();
  