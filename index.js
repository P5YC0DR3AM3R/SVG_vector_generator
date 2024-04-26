const fs = require("fs");
const inquirer = require("inquirer");
const colors = require("colors");
const shapes = require("./lib/shapes")

inquirer
    .prompt(questions)
        .then((answers) => {

        })

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter 3 letters for logo text: "
    }
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color as a keyword, or hexadecimal number, for your text: "
    }
    {
        type: "input",
        name: "Shape",
        message: "Please enter a color as a keyword, or hexadecimal number, for your text: "
    }
]