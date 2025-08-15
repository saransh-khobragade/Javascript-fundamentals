/*
Q9. How does inheritance work in JavaScript?

Solution (concise):
- Prototypal inheritance: objects inherit directly from other objects via [[Prototype]].
- Class syntax is syntactic sugar over prototypal inheritance with clearer ergonomics.
*/

const parent = { greet() { return 'hello'; } };
const child = Object.create(parent);
child.name = 'child';

class Base { id = 1; who() { return 'base'; } }
class Derived extends Base { who() { return 'derived'; } }

module.exports = { parent, child, Base, Derived };

