const { Triangle } = require('./shapes');

describe('Triangle', () => {
    let triangle;

    beforeEach(() => {
        // Initialize Triangle with default values or specific for test
        triangle = new Triangle("Hello", "white", "red");
    });

    test('render method outputs correct SVG', () => {
        const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="red" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">Hello</text></svg>';
        expect(triangle.render()).toEqual(expectedSVG);
    });

    test('setColor updates fill color correctly', () => {
        triangle.setColor('blue');
        expect(triangle.fillColor).toEqual('blue');
    });
});

const { Circle } = require('./shapes');

describe('Circle', () => {
    let circle;

    beforeEach(() => {
        // Initialize Circle with some default values
        circle = new Circle("Welcome", "black", "green");
    });

    test('render method outputs correct SVG', () => {
        const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="black">Welcome</text></svg>';
        expect(circle.render()).toEqual(expectedSVG);
    });

    test('setColor updates fill color correctly', () => {
        circle.setColor('yellow');
        expect(circle.fillColor).toEqual('yellow');
    });
});

const { Square } = require('./shapes');

describe('Square', () => {
    let square;

    beforeEach(() => {
        // Initialize Square with default values
        square = new Square("Goodbye", "blue", "purple");
    });

    test('render method outputs correct SVG', () => {
        const expectedSVG = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="150" fill="purple" /><text x="75" y="100" font-size="60" text-anchor="middle" fill="blue">Goodbye</text></svg>';
        expect(square.render()).toEqual(expectedSVG);
    });

    test('setColor updates fill color correctly', () => {
        square.setColor('orange');
        expect(square.fillColor).toEqual('orange');
    });
});