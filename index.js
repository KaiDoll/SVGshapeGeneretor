const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");
//Importing necessary files. 
const questions = [ //The questions for the user to answer on the terminal. 
  {
    type: "input",
    message: "Enter a text for the logo (Must not be more than 3 characters.)",
    name: "text",
    validate: function (text) {
      if (text.length <= 3) {
        return true;
      } else {
        return "Please input no more than 3 characters."; //limits the user to put 3 or less characters. 
      }
    },
  },
  {
    type: "input",
    message: "Enter a text color",
    name: "textcolor",
  },
  {
    type: "list",
    message: "Select a shape for the logo",
    choices: ["Circle", "Square", "Triangle"],
    name: "shape",
  },
  {
    type: "input",
    message: "Enter a shape color",
    name: "shapecolor",
  },
];
// let svgOutputString = "";
//this function starts off the questions on the terminal.
function init() {
  inquirer.prompt(questions).then((response) => {

    let chosenShape;
    if (response.shape === "Circle") {
      chosenShape = new Circle(
        response.shapecolor,
        response.text,
        response.textcolor
      );
    } else if (response.shape === "Square") {
      chosenShape = new Square(
        response.shapecolor,
        response.text,
        response.textcolor
      );
    } else {
      chosenShape = new Triangle(
        response.shapecolor,
        response.text,
        response.textcolor
      );
    }
//this function takes in the user input and creates the svg file. 
    fs.writeFile("logo.svg", chosenShape.render(), (err, res) => {
      if (err) throw err;
      console.log("svg created");
    });
  });
}


init();
