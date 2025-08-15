/*
Q19. When to use typeof vs instanceof? Edge cases?

Solution (concise):
- typeof: for primitives and functions; typeof null === 'object' (legacy bug).
- instanceof: checks prototype chain for objects; fails across realms (iframes).
*/

function demoChecks() {
  return {
    typeofNull: typeof null,            // 'object'
    typeofFunc: typeof function(){},    // 'function'
    arrInstance: [] instanceof Array,   // true
  };
}

module.exports = { demoChecks };

