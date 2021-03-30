//function to generate README

function generateREADME (userResponse, userInfo) {
    var result = (`# ${userResponse.title}
    \n
    ${userResponse.description}
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
    ${userResponse.github}
    \n
    ${userResponse.email}`)
}