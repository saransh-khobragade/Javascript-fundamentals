/*
Q54. What is destructuring assignment and how do rest/spread operators work?

Solution (concise):
- Destructuring extracts values/properties into variables.
- Rest collects remaining items; spread expands arrays/objects.
*/

const arr = [1, 2, 3];
const [first, ...restArr] = arr;

const obj = { a: 1, b: 2, c: 3 };
const { a, ...restObj } = obj;

const arr2 = [...arr, 4];
const obj2 = { ...obj, d: 4 };

module.exports = { arr, first, restArr, obj, a, restObj, arr2, obj2 };

