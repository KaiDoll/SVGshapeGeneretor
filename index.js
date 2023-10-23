const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    message: "Enter a text for the logo (Must not be more than 3 characters.)",
    name: "text",
    validate: function (text) {
      if (text.length <= 3) {
        return true;
      } else {
        return "Please input no more than 3 characters.";
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
let svgOutputString = "";
//The arguments is on the init functions.

// this function grabs the questions from the const question
// array and then tells it to create a readme document reading
// the data from the generateMarkdown

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

    fs.writeFile("logo.svg", chosenShape.render(), (err, res) => {
      if (err) throw err;
      console.log("svg created");
    });
  });
}

// // Function call to initialize app
init();
