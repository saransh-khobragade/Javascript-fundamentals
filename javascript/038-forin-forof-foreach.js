/*
Q38. Differences between for...in, for...of, and forEach?

Solution (concise):
- for...in: iterates enumerable keys (including inherited) of objects.
- for...of: iterates values of iterable objects (arrays, strings, maps).
- forEach: array method, callback per element; cannot break early.
*/

const obj = { a: 1, b: 2 };
const arr = [10, 20];

function demoLoops() {
  const keys = [];
  for (const k in obj) keys.push(k);
  const values = [];
  for (const v of arr) values.push(v);
  const viaForEach = [];
  arr.forEach((v) => viaForEach.push(v));
  return { keys, values, viaForEach };
}

module.exports = { demoLoops };

