/*
Q5. What is a closure and what are common use cases for it?

Solution (concise):
- A function that retains access to its lexical environment after the outer function returns.
- Uses: encapsulation, private state, function factories, memoization, event handlers.
- Pitfalls: capturing loop variables incorrectly; prefer let for loop indices.
*/

// Examples
function createCounter(start = 0) {
  let count = start;
  return {
    increment() {
      count += 1;
      return count;
    },
    get() {
      return count;
    },
  };
}

module.exports = { createCounter };

