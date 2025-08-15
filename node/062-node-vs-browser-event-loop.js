/*
Q62. How does the Node.js event loop differ from the browser's event loop?

Solution (concise):
- Node loop has distinct phases (timers, pending, poll, check, close).
- Microtasks (Promises) run after each phase; nextTick runs before microtasks in Node.
*/

module.exports = {};

