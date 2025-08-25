class Animal {
    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }
}

class Cat extends Animal {
    constructor(name){
        super(name)
    }
    say() {
        return "meow"
    }
}

const cat = new Cat("billu")
console.log(cat.getName())
console.log(cat.say())