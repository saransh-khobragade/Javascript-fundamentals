/*
Q50. How does await affect concurrency and how to parallelize async work?

Solution (concise):
- Sequential awaits in a loop serialize tasks.
- Start Promises first, then await Promise.all for parallelism.
*/

const delay = (ms, v) => new Promise((r) => setTimeout(() => r(v), ms));

async function sequential() {
  const a = await delay(5, 'A');
  const b = await delay(5, 'B');
  return a + b; // ~10ms
}

async function parallel() {
  const pa = delay(5, 'A');
  const pb = delay(5, 'B');
  const [a, b] = await Promise.all([pa, pb]);
  return a + b; // ~5ms
}

module.exports = { sequential, parallel };

