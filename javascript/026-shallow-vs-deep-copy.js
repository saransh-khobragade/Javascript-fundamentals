/*
Q26. Shallow copy vs deep copy? How to create each?

Solution (concise):
- Shallow: copies top-level references; nested objects shared.
- Deep: recursively copies; independent structures.
*/

const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original }; // shallow
// Deep (modern):
const deep = typeof structuredClone === 'function'
  ? structuredClone(original)
  : JSON.parse(JSON.stringify(original));

module.exports = { original, shallow, deep };

