/*
Q37. Compare array methods map, filter, and reduce.

Solution (concise):
- map: transform each element → new array.
- filter: keep elements matching predicate → new array.
- reduce: accumulate into a single value.
*/

const arr = [1, 2, 3];
const mapped = arr.map((x) => x * 2);
const filtered = arr.filter((x) => x % 2 === 1);
const reduced = arr.reduce((sum, x) => sum + x, 0);

module.exports = { arr, mapped, filtered, reduced };

