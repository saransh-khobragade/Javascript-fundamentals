//Polymorphism one name many form functions

class Shape {
    area() {
        return 0;
    }
    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Circle extends Shape {
    constructor(r) {
        super();
        this.radius = r;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends Shape {
    constructor(w, h) {
        super();
        this.width = w;
        this.height = h;
    }

    area() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(b, h) {
        super();
        this.base = b; 
        this.height = h;
    }

    area() {
        return this.base * this.height / 2;
    }
}



const shapes = new Circle(3)

console.log(shapes);