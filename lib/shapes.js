class Shape {
    constructor(text, textColor, fillColor) {
        this.text = text;
        this.textColor = textColor;
        this.fillColor = fillColor;
    }
    setColor(newColor) {
      this.fillColor = newColor;
  }
}



class Circle extends Shape {
    constructor(text = "", textColor = "", fillColor = "") {
      super(text, textColor, fillColor);
    }
  
    render() {
      // Code to render a circle
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fillColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }

class Triangle extends Shape {
    constructor(text = "", textColor = "", fillColor = "") {
      super(text, textColor, fillColor);
    }
  
    render() {
      // Code to render a triangle
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }


  class Square extends Shape {
    constructor(text = "", textColor = "", fillColor = "") {
      super(text, textColor, fillColor);
    }
  
    render() {
      // Code to render a square
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" fill="${this.fillColor}" /><text x="75" y="100" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }

module.exports = {Circle, Triangle, Square};