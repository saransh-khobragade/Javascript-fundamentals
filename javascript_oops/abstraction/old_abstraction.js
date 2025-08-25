//abstract class
var Animal = function() {
    if (this.constructor === Animal) {
      throw new Error("Can't instantiate abstract class!");
    }
};
//abstract method
Animal.prototype.say = function() {
    throw new Error("Abstract method!");
}


//child class which will use abstraction
var Cat = function() {
    Animal.apply(this, arguments);
};

//inheriting
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
//Overiding say
Cat.prototype.say = function() {
    console.log('meow');
}


var cat = new Cat();
cat.say();