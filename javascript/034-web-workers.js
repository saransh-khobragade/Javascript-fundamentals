/*
Q34. What are Web Workers and when would you use them?

Solution (concise):
- Background threads for CPU-heavy tasks; no DOM access; communicate via postMessage.
*/

// Pseudo usage:
// const worker = new Worker('worker.js');
// worker.postMessage({ task: 'compute' });
// worker.onmessage = (e) => console.log(e.data);

module.exports = {};

