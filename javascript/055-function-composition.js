/*
Q55. What is function composition and how can you implement it?

Solution (concise):
- Combine simple functions where output of one is input of next.
*/

const compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);
const double = (x) => x * 2;
const increment = (x) => x + 1;
const incThenDouble = compose(double, increment);

module.exports = { compose, double, increment, incThenDouble };

