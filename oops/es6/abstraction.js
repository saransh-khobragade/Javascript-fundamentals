//Abstraction is a mechanism by which we handle complexity by hiding unnecessary details from the user
class Animal {
    constructor() {
        if (this.constructor == Animal) {   
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    say() {
        throw new Error("Method 'say()' must be implemented.");
    }
}

class Cat extends Animal {
    say() {
        console.log("meow");
    }
}

const c = new Cat()
c.say()     //meow

const a = new Animal()  //Error: Abstract classes can't be instantiated.