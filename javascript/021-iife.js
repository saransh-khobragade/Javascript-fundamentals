/*
Q21. What is an IIFE and why use it?

Solution (concise):
- Immediately Invoked Function Expression: executes as soon as defined.
- Creates a new scope; avoids polluting globals; legacy module pattern.
*/

const resultIIFE = (function(){ const secret = 42; return secret + 1; })();

module.exports = { resultIIFE };

