/*
Q15. What are generators and iterators? When would you use them?

Solution (concise):
- Iterator: object with next() → { value, done }.
- Generator: function* producing iterators, supports yield and lazy sequences.
*/

function* range(start, end) {
  for (let i = start; i <= end; i += 1) yield i;
}

function demoGenerator() {
  return [...range(1, 3)];
}

module.exports = { range, demoGenerator };

