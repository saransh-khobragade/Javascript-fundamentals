/*
Q7. What are the differences between call, apply, and bind?

Solution (concise):
- call: invokes immediately with a given this and comma-separated args.
- apply: invokes immediately with a given this and args as an array.
- bind: returns a new function with bound this and optionally preset args.
*/

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: 'Ada' };

// Examples
const withCall = greet.call(person, 'Hello', '!');
const withApply = greet.apply(person, ['Hi', '!!']);
const bound = greet.bind(person, 'Welcome');
const withBind = bound('?');

module.exports = { withCall, withApply, withBind };

