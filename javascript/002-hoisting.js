/*
Q2. How does variable hoisting work in JavaScript?

Solution (concise):
- Declarations are hoisted; initializations are not.
- var is hoisted and initialized to undefined; let/const are hoisted but in TDZ.
- Function declarations are hoisted with their bodies; function expressions follow variable rules.
- Best practice: declare before use; do not rely on hoisting.
*/

// Examples
function demoHoisting() {
  // console.log(beforeLet); // ReferenceError (TDZ) if uncommented
  console.log(beforeVar); // undefined (declaration hoisted, initialized to undefined)
  var beforeVar = 'now assigned';
  let beforeLet = 'declared';
  return { beforeVar, beforeLet };
}

module.exports = { demoHoisting };

