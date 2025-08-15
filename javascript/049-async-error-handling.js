/*
Q49. How to handle errors in asynchronous code?

Solution (concise):
- Promises: .catch at end of chain.
- async/await: try/catch.
- Global: window.onunhandledrejection / process.on('unhandledRejection') for last resort.
*/

const fail = () => Promise.reject(new Error('boom'));

async function demoAsyncErrors() {
  try { await fail(); } catch (e) { return 'caught:' + e.message; }
  return 'ok';
}

module.exports = { fail, demoAsyncErrors };

