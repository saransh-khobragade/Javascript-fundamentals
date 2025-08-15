/*
Q29. What is memoization? When should you use it?

Solution (concise):
- Cache function results by args to avoid recomputation; helpful for expensive pure functions.
*/

function memoize(fn) {
  const cache = new Map();
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const val = fn(...args);
    cache.set(key, val);
    return val;
  };
}

const slowAdd = (a, b) => a + b;
const fastAdd = memoize(slowAdd);

module.exports = { memoize, slowAdd, fastAdd };

