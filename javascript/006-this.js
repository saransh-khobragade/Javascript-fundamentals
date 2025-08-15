/*
Q6. How is the `this` keyword determined in different invocation contexts?

Solution (concise):
- Default: global object (or undefined in strict mode).
- Method call: object before the dot becomes `this`.
- Explicit: call/apply/bind set `this`.
- Arrow functions: lexical `this` from enclosing scope; cannot be changed.
*/

// Examples
const obj = {
  value: 41,
  regular() {
    return this.value;
  },
  arrow: () => {
    return typeof this === 'undefined' ? 'undefined-this' : this.value;
  },
};

function demoThisBinding() {
  const regularResult = obj.regular();
  const callResult = obj.regular.call({ value: 100 });
  const bindResult = obj.regular.bind({ value: 7 })();
  const arrowResult = obj.arrow();
  return { regularResult, callResult, bindResult, arrowResult };
}

module.exports = { demoThisBinding };

