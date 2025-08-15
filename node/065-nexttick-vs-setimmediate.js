/*
Q65. Difference between process.nextTick and setImmediate?

Solution (concise):
- nextTick: runs before microtasks after current operation; can starve the loop if abused.
- setImmediate: runs in the check phase after I/O events.
*/

module.exports = {};

