const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose your shape:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter a color for your shape: '
    },
    {
        type: 'input',
        name: 'text',
        message: 'Please enter text for your shape: '
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter a color for the text: '
    },
];

inquirer.prompt(questions).then(answers => {
    const { shape, shapeColor, text, textColor } = answers;
    let shapeInstance;

    switch(shape) {
        case 'Circle':
            shapeInstance = new Circle(text, textColor, shapeColor);
            break;
        case 'Triangle':
            shapeInstance = new Triangle(text, textColor, shapeColor);
            break;
        case 'Square':
            shapeInstance = new Square(text, textColor, shapeColor);
            break;
    }

    const svgContent = shapeInstance.render();
    const fileName = `${shape.toLowerCase()}.svg`;

    fs.writeFileSync(fileName, svgContent);
    console.log(`SVG file '${fileName}' has been generated successfully.`);
}).catch(error => {
    console.error('An error occurred:', error);
});