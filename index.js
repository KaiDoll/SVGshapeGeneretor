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