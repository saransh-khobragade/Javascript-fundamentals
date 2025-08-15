/*
Q36. Compare Map, Set, WeakMap, WeakSet.

Solution (concise):
- Map: key→value, any key, preserves insertion order, iterable.
- Set: unique values, iterable.
- WeakMap: keys must be objects, weakly held (GC), not iterable.
- WeakSet: like Set but only objects, weakly held, not iterable.
*/

const m = new Map([[1, 'a']]);
const s = new Set([1, 1, 2]);
const wm = new WeakMap();
const ws = new WeakSet();

module.exports = { m, s, wm, ws };

