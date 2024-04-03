function Shape() {
    if (this.constructor === Shape) {
        throw new Error("Cannot instantiate abstract class Shape");
    }
    this.draw = function() {
        throw new Error("Cannot call abstract method draw from Shape");
    }
}

function Circle() {
    Shape.call(this);
    this.draw = function() {
        console.log("Drawing a Circle");
    }
}
// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

let circle = new Circle();
circle.draw(); // "Drawing a Circle"
console.log(Circle.constructor.name)
let shape = new Shape(); // Error: Cannot instantiate abstract class Shape