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


  if (`${userResponse.license}` === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    licenseDescription = "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
  }
  
  if (`${userResponse.license}` === 'Apache') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    licenseDescription = 'Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at\n http://www.apache.org/licenses/LICENSE-2.0\n    Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.'
  }

  if (`${userResponse.license}` === 'GPL') {
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)'
    licenseDescription = 'This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.\n This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.\n You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>.'
  }

  if (`${userResponse.license}` === 'BSD') {
    licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
    licenseDescription = 'Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\n 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\n 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\n 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.'
  }

  const generateBadge = (userResponse) =>



 const generateREADME = (userResponse) =>
    `## ${userResponse.title}
    \n
    ${userResponse.description}
    \n
    ${licenseBadge}
    \n
    ##Table of Contents
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
    #Installation
    \n
    ${userResponse.installation}
    \n
    #Instructions
    \n
    ${userResponse.usage}
    \n
    #Contributing
    \n
    ${userResponse.contributing}
    \n
    #Tests
    \n
    ${userResponse.tests}
    \n
    #License
    \n
    This project is licensed under the ${userResponse.license} license.
    \n
    Copyright ${userResponse.year} ${userResponse.name}
    \n
    ${licenseDescription}
    \n
    #Contact
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
