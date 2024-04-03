//Polymorphism means the same function with different forms, here area()
class Circle {
    area(radius) {
        return Math.PI * radius ** 2;
    }
}

class Rectangle extends Circle {
    area(width,height) {
        return width * height;
    }
}

const c = new Circle()
console.log(c.area(5));

const r = new Rectangle()
console.log(r.area(5,10));