/*
Q24. What is currying? How does it differ from partial application?

Solution (concise):
- Currying: transform f(a,b,c) into f(a)(b)(c).
- Partial: pre-fill some args, return a function for remaining.
*/

const curry = (fn) => (a) => (b) => fn(a, b);
const add = (a, b) => a + b;
const curriedAdd = curry(add);

const partial = (fn, ...preset) => (...rest) => fn(...preset, ...rest);
const add10 = partial(add, 10);

module.exports = { curry, curriedAdd, partial, add10 };

