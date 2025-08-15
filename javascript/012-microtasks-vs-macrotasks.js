/*
Q12. What are microtasks vs macrotasks, and why do they matter?

Solution (concise):
- Microtasks: Promise callbacks, MutationObserver; run after current task before rendering.
- Macrotasks: setTimeout, setInterval, I/O, message events; scheduled in task queue.
- Microtasks can starve rendering if enqueued in loops; balance carefully.
*/

async function demoQueues() {
  const order = [];
  setTimeout(() => order.push('macrotask-timeout'), 0);
  Promise.resolve().then(() => order.push('microtask-1'));
  Promise.resolve().then(() => order.push('microtask-2'));
  order.push('sync');
  await Promise.resolve();
  return order;
}

module.exports = { demoQueues };

