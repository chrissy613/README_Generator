//REQUIRED NODE MODULES
const inquirer = require("inquirer");
const fs = require("fs");

//QUESTIONS ARRAY 
const questions = ([
    //ENTER PROJECT TITLE
    {
        name: "projectTitle",
        message: "What is the title of your project?"
    },
    //ENTER A DESCRIPTION OF THE PROJECT
    {
        name: "projectDescription",
        message: "Please enter a short description of your project."
    },
    //ENTER A BADGE
    {
        name: "projectBadge",
        message: "Please enter a badge URL to add to your README.md file."
    },
    //ENTER SECTIONS OF THE TABLE OF CONTENTS
    {
        name: "projectTOC",
        message: "Please enter the names of sections of your table of contents in markdown format seperated by commas."
    },
    //ENTER INSTALLATION INSTRUCTIONS
    {
        name: "projectInstall",
        message: "Please enter instructions to help a user install your application."
    },
    //ENTER USAGE INFORMATION
    {
        name: "projectUsage",
        message: "Please enter instructions on how a user would use your application."
    },
    
    //ENTER NAMES OF CONTRIBUTORS TO PROJECT
    {
        name: "projectCredits",
        message: "Please enter the names of contributors to this project."
    },
    //ENTER TESTS
    {
        name: "projectTests",
        message: "Please enter an example of the function of your application."
    },
    //ENTER CONTACT INFORMATION FOR ADDITIONAL QUESTIONS
    //GITHUB
    {
        name: "projectGithub",
        message: "Please enter the URL of your GitHub profile."
    },
    //EMAIL ADDRESS
    {
        name: "projectEmail",
        message: "Please enter your Email address for any further questions regarding the application."
    },
    //ENTER LICENSE
    {
        name: "projectLicense",
        message: "Please select a license.",
        type: "checkbox",
        choices: [
            "GNU AGPLv3 License",
            "GNU GPLv3 License",
            "MIT License",
            "Apache License"
        ]
    },
]);

//FUNCTION TO BEGIN README.md QUESTIONS AND PRINT RESPONSES TO README.md FILE
inquirer.prompt(questions).then(answers => {
    fs.writeFileSync("README.md", (`# ${answers.projectTitle} ${answers.projectBadge} \n \n`))
    fs.appendFileSync("README.md", (`## Project Description \n \n ${answers.projectDescription} \n \n \n`))
    fs.appendFileSync("README.md", (`## Table of Contents \n \n ${answers.projectTOC} \n \n \n`))
    fs.appendFileSync("README.md", (`## Installation \n \n ${answers.projectInstall} \n \n \n`))
    fs.appendFileSync("README.md", (`## Usage \n \n ${answers.projectUsage} \n \n \n`))
    fs.appendFileSync("README.md", (`## Credits \n \n ${answers.projectCredits} \n \n \n`))
    fs.appendFileSync("README.md", (`## Tests \n \n ${answers.projectTests} \n \n \n`))
    fs.appendFileSync("README.md", (`## My GitHub Profile \n \n ${answers.projectGitHub} \n \n \n`))
    fs.appendFileSync("README.md", (`## My Email Address \n \n ${answers.projectEmail} \n \n \n`))
    fs.appendFileSync("README.md", (`## License \n \n ${answers.projectLicense} \n`))
});