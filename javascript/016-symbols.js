/*
Q16. What are Symbols and when are they useful?

Solution (concise):
- Unique, non-enumerable-by-default property keys; avoid name collisions.
- Used for meta-protocols (e.g., Symbol.iterator) and semi-private fields.
*/

const id = Symbol('id');
const user = { name: 'Ada', [id]: 123 };

function demoSymbols() {
  return { keys: Object.keys(user), hasId: Object.getOwnPropertySymbols(user).includes(id) };
}

module.exports = { id, user, demoSymbols };

