/*
Q4. Explain scope in JavaScript (global, function, block).

Solution (concise):
- Global: visible everywhere.
- Function: variables limited to a function invocation.
- Block: let/const limited to {} blocks.
- Lexical scope: resolution by definition location, not call site.
*/

// Examples
const globalName = 'global';
function outer() {
  const outerName = 'outer';
  function inner() {
    const innerName = 'inner';
    return { globalName, outerName, innerName };
  }
  let blockVisible;
  {
    const blockOnly = 'block';
    blockVisible = blockOnly;
  }
  return { fromInner: inner(), blockVisible, blockOnlyIsDefined: typeof blockOnly !== 'undefined' };
}

module.exports = { outer };

