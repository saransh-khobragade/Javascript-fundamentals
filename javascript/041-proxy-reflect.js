/*
Q41. What are Proxy and Reflect? Typical use cases.

Solution (concise):
- Proxy: intercept operations (get/set/has) on a target object.
- Reflect: standard methods that mirror internal operations.
*/

const target = { x: 1 };
const proxy = new Proxy(target, {
  get(obj, prop, receiver) {
    return Reflect.get(obj, prop, receiver);
  },
  set(obj, prop, value, receiver) {
    return Reflect.set(obj, prop, value, receiver);
  },
});

module.exports = { target, proxy };

