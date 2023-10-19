const inquirer = require('inquirer')
const fs = require('fs')
const { Triangle, Circle, Square } = require('./Lib/shapes.js')

const questions = [
    {
        type: 'input',
        message: 'Enter a text for the logo (Must not be more than 3 characters.)',
        name: 'text',
        validate: function(input) {
            if(input <= 2) {
                return true;
            } else {
                return 'Please input no more than 3 characters.'
            }
        }
    },
    {
        type: 'input',
        message: 'Enter a text color',
        name: 'textcolor',
    },
    {
        type: 'list',
        message: 'Select a shape for the logo',
        choices : ['Circle', 'Square', 'Triangle'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'Enter a shape color',
        name: 'shapecolor',
    },
    
];

//The arguments is on the init functions. 
function writeToFile(fileName, data) {
    const svgOutputString = "";
    svgOutputString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + `${response.shape}` + 
    '<text x="150" y="125" font-size="60" text-anchor="middle" fill="' + `${response.textcolor}` + '">' + `${response.text}` + '</text> </svg>'

   let chosenShape;
    if(response.shape === 'Circle') {
        chosenShape = new Circle();
        svgOutputString + `<circle cx="150" cy="100" r="80" fill="${response.color}" />`
    } else if (response.shape === 'Square') {
            chosenShape = new Square();
            svgOutputString + `<rect x="90" y="40" width="120" height="120" fill="${response.color}" />`
    } else if (response.shape === 'Triangle') {
        chosenShape = new Triangle();
        svgOutputString + `<polygon points="150,20 280,180 20,180" fill="${response.color}" />`
    }
  
    fs.writeFile(fileName, data, (err, res) => {
        if (err) throw err
        console.log('Your logo has been generated!')
    })
}
// this function grabs the questions from the const question 
// array and then tells it to create a readme document reading
// the data from the generateMarkdown

function init() {
    inquirer.prompt(questions).then((response)=> {
       writeToFile('logo.svg', svgOutputString, (response))
    })
 
}

// // Function call to initialize app
init();