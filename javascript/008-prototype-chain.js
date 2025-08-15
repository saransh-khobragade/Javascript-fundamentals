/*
Q8. What is the prototype and how does the prototype chain work?

Solution (concise):
- Every object has an internal [[Prototype]] that links to another object.
- Property lookup walks up the chain until found or reaches null.
- Functions have a .prototype used for instances created with new.
*/

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return this.name + ' makes a noise';
};

function Dog(name) {
  Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
  return this.name + ' barks';
};

const d = new Dog('Rex');

module.exports = { Animal, Dog, d };

