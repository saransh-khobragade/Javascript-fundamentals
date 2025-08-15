/*
Q28. What are pure functions and why are they useful?

Solution (concise):
- Deterministic: same inputs → same output; no side effects.
- Easier to test, compose, parallelize; improves predictability.
*/

const add = (a, b) => a + b; // pure
let side = 0;
function impureInc() { side += 1; return side; }

module.exports = { add, impureInc };

