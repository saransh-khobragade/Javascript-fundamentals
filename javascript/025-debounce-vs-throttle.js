/*
Q25. Difference between debounce and throttle? Use cases?

Solution (concise):
- Debounce: run after the events stop for N ms (limit burst). Typing input.
- Throttle: run at most once per N ms (limit rate). Scroll/resize.
*/

function debounce(fn, wait) {
  let t;
  return function (...args) {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

module.exports = { debounce, throttle };

