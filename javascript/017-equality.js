/*
Q17. What is the difference between == and ===?

Solution (concise):
- === strict equality, no type coercion.
- == loose equality, coerces operands (can be surprising).
*/

function demoEquality() {
  return {
    strict: (0 === false), // false
    loose: (0 == false),   // true (coercion)
    nullUndefined: (null == undefined), // true
  };
}

module.exports = { demoEquality };

