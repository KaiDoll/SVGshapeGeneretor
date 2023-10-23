const { Circle } = require("./shapes"); //not sure what is happening?? 
const { Square } = require("./shapes");
const { Triangle } = require("./shapes");

describe("Tests for the circle class", () => {
  test("will a new instance of the circle class return an object?", () => {
    const circle = new Circle();

    expect(typeof circle).toBe("object");
  });

  test("Will the new instance of the Circle class return the svg string", () => {
    const circle = new Circle("blue", "MAD", "white");

    expect(circle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="blue" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">MAD</text></svg>`);
  });

  test("if we create a new instance of circle will it return a text color", () => {
    const circle = new Circle("a", "b", "red");
    expect(circle.textcolor).toBe("red");
    expect(circle.color).toBe("a");
    expect(circle.text).toBe("b");

  });
  
});

describe("Tests for the square class", () => {
  test("will a new instance of the square class return an object?", () => {
    const square = new Square();

    expect(typeof square).toBe("object");
  });

  test("Will the new instance of the Square class return the svg string", () => {
    const square = new Square("green", "LOT", "white");

    expect(square.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">LOT</text></svg>`);
  });

  test("if we create a new instance of square will it return a text color", () => {
    const square = new Square("c", "d", "pink");
    expect(square.textcolor).toBe("pink");
    expect(square.color).toBe("c");
    expect(square.text).toBe("d");

  });
  
});

describe("Tests for the triangle class", () => {
  test("will a new instance of the triangle class return an object?", () => {
    const triangle = new Triangle();

    expect(typeof triangle).toBe("object");
  });

  test("Will the new instance of the Triangle class return the svg string", () => {
    const triangle = new Triangle("yellow", "BLW", "white");

    expect(triangle.render()).toBe(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,20 280,180 20,180" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">BLW</text></svg>`);
  });

  test("if we create a new instance of square will it return a text color", () => {
    const triangle = new Triangle("e", "f", "purple");
    expect(triangle.textcolor).toBe("purple");
    expect(triangle.color).toBe("e");
    expect(triangle.text).toBe("f");

  });
  
});