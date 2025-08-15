/*
Q57. What are common causes of memory leaks in JavaScript?

Solution (concise):
- Unremoved event listeners, timers/intervals, global variables, detached DOM, long-lived caches.
*/

function attachAndCleanup(el, handler) {
  el.addEventListener('click', handler);
  return () => el.removeEventListener('click', handler);
}

module.exports = { attachAndCleanup };

