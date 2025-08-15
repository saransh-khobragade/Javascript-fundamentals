/*
Q23. What is tree-shaking and how does it work?

Solution (concise):
- Dead-code elimination for ESM: unused exports can be removed at build time.
- Requires static import/export (no dynamic require) and side-effect awareness.
*/

// Example (conceptual):
// file: math.js
// export const add = (a,b) => a+b;
// export const unused = () => 42; // removed if not imported
// file: app.js
// import { add } from './math.js';
// console.log(add(1,2));

module.exports = {};

