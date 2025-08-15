/*
Q10. Difference between class syntax and prototype-based inheritance?

Solution (concise):
- Class: syntactic sugar over prototypes (constructor, methods, extends, super).
- Prototype-based: manually wire [[Prototype]] and methods; more flexible but verbose.
*/

// Prototype style
function P(name) { this.name = name; }
P.prototype.say = function () { return 'P:' + this.name; };

// Class style
class C {
  constructor(name) { this.name = name; }
  say() { return 'C:' + this.name; }
}

module.exports = { P, C };

