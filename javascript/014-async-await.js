/*
Q14. How does async/await work and how to handle errors?

Solution (concise):
- await pauses within async function until Promise settles.
- Use try/catch for errors; run tasks in parallel with Promise.all when possible.
*/

const delay = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));

async function demoAsyncAwait() {
  try {
    const [a, b] = await Promise.all([delay(1, 'A'), delay(1, 'B')]);
    return a + b;
  } catch (e) {
    return 'error:' + e.message;
  }
}

module.exports = { delay, demoAsyncAwait };

