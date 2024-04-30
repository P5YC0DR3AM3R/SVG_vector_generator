const { Circle, Triangle, Square } = require('./shapes');

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="blue" /><text x="150" y="150" font-size="60" text-anchor="middle" fill=""></text></svg>');