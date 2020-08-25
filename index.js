//NODE MODULES
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
    //ENTER SECTIONS OF THE TABLE OF CONTENTS
    {
        name: "projectTOC",
        message: "Please enter the names of sections of your table of contents."
    },
    //ENTER INSTALLATION INSTRUCTIONS
    {
        name: "projectInstallation",
        message: "Please enter instructions to help a user install your application."
    },
    //ENTER USAGE INFORMATION
    {
        name: "projectUsageInfo",
        message: "Please enter instructions on how a user would use your application."
    },
    //ENTER LICENSE
    {
        name: "projectLicense",
        message: "Please select a license."
    },
    //ENTER CONTRIBUTORS
    {
        name: "projectContribution",
        message: "Please enter the names of contributors to this project."
    },
    //ENTER TESTS
    {
        name: "projectTests",
        message: "fkjsahdf"
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
]);

//FUNCTION TO BEGIN README.txt QUESTIONS IN COMMAND LINE
inquirer.prompt(questions);


// function to write README file
fs.writeFile("README.txt", err => {
    if(err){
        console.log(err);
    }else{
        console.log("success");
    }
});

// function to initialize program
function init() {

}

// function call to initialize program
init();
