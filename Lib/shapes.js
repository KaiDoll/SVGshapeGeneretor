class Shape {
    constructor(color,text,textcolor) {
        this.color = color;
        this.text = text;
        this.textcolor = textcolor;
    }
}  
class Circle extends Shape {
    constructor(color,text,textcolor) {
        super(color,text,textcolor);
    }

    logoGenerator() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${response.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>

</svg>`
    }
}

class Square extends Shape {
    constructor(color,text,textcolor) {
        super(color,text,textcolor);
    }
    logoGenerator() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="40" width="120" height="120" fill="${response.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>

</svg>`
    }
}

class Triangle extends Shape {
    constructor(color,text,textcolor) {
        super(color,text,textcolor);
    }
    logoGenerator() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,20 280,180 20,180" fill="${response.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${response.textcolor}">${response.text}</text>

</svg>`
    }
}

module.exports = { Triangle, Circle, Square }
