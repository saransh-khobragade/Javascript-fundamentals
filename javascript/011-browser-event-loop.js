/*
Q11. How does the event loop work in the browser (call stack, task queues)?

Solution (concise):
- JS runs on a single thread: call stack executes frames.
- Macrotasks (setTimeout, DOM events) and microtasks (Promises) queued.
- Each tick: run all microtasks after current task before next macrotask.
*/

async function demoEventLoop() {
  const order = [];
  order.push('sync-start');
  setTimeout(() => order.push('timeout'), 0);
  Promise.resolve().then(() => order.push('microtask'));
  order.push('sync-end');
  await Promise.resolve();
  return order;
}

module.exports = { demoEventLoop };

