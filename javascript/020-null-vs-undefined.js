/*
Q20. Difference between null and undefined?

Solution (concise):
- undefined: variable declared but not assigned; default missing value.
- null: intentional empty value set by developer.
*/

function demoNullUndefined() {
  let x; // undefined
  const y = null;
  return { xType: typeof x, yEqualsNull: y === null };
}

module.exports = { demoNullUndefined };

