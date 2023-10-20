const { Circle } = require("./shapes");

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
