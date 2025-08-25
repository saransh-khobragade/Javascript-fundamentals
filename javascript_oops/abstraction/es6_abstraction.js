class Animal {
    constructor() {
        if (this.constructor == Animal) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    say() {
        throw new Error("Method 'say()' must be implemented.");
    }

    eat() {
        console.log("eating");
    }
}

class Cat extends Animal {
    say() {
        console.log("meow");
    }
}

new Cat().say(); // eating