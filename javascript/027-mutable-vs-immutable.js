/*
Q27. Mutable vs immutable data patterns in JavaScript?

Solution (concise):
- Mutable: change objects in place.
- Immutable: create new objects; avoid side effects; easier reasoning.
*/

const state = { count: 0 };
// Mutable update
state.count += 1;

// Immutable update
const newState = { ...state, count: state.count + 1 };

module.exports = { state, newState };

