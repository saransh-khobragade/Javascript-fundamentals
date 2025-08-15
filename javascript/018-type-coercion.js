/*
Q18. How does type coercion work in JavaScript?

Solution (concise):
- ToPrimitive → ToNumber/ToString conversions for loose ops.
- + with string triggers string concatenation; otherwise numeric addition.
- Falsy: 0, -0, '', null, undefined, NaN, false.
*/

function demoCoercion() {
  return {
    plusString: 1 + '1', // '11'
    plusNumber: 1 + 1,   // 2
    looseEq: ('' == 0),  // true
    strictEq: ('' === 0),// false
  };
}

module.exports = { demoCoercion };

