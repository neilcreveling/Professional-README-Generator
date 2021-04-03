// external packages
const fs = require('fs');
const inquirer = require('inquirer');
const licenseText = require('./license-descriptions.js');
const badgeIcon = require('./badges.js');
let badge;


// user prompts
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Please provide your name.',
      },
      {
        type: 'input',
        name: 'year',
        message: 'What year is it?',
      },
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
        message: 'Which license would you like to use?',
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


 const generateHTML = (userResponse) =>
    `# ${userResponse.title}
    \n
    ## ${userResponse.description}
    \n
    ${badge}
    \n
    ### Table of Contents
    \n
    * [Installation](#Installation)
    \n
    * [Instructions](#Instructions)
    \n
    * [Contributors](#Contributors)
    \n
    * [Tests](#Tests)
    \n
    * [Contact](#Contact)
    \n
    ## Installation
    \n
    ${userResponse.installation}
    \n
    ## Instructions
    \n
    ${userResponse.usage}
    \n
    ## Contributing
    \n
    ${userResponse.contributing}
    \n
    ## Tests
    \n
    ${userResponse.tests}
    \n
    ## License
    \n
    Copyright ${userResponse.year} ${userResponse.name}
    \n
    ${userResponse.license}
    \n
    ## Contact
    \n
    [${userResponse.github}](github.com/${userResponse.github})
    \n
    ${userResponse.email}`

// function to write readme

    promptUser()

        .then((data) => {
            switch(data.license) {
                case 'MIT':
                    data.license = licenseText.mit
                    badge = badgeIcon.mit
                    break;
                case 'Apache':
                    data.license = licenseText.apache
                    badge = badgeIcon.apache
                    break;
                case 'GPL':
                    data.license = licenseText.gpl
                    badge = badgeIcon.gpl
                    break;
                case 'BSD':
                    data.license = licenseText.bsd
                    badge = badgeIcon.bsd
                    break;
            }
            const filename = 'Sample-README.md'

            fs.writeFile(filename, generateHTML(data), (err) =>
            err ? console.log(err) : console.log('Success!')

        );
    });