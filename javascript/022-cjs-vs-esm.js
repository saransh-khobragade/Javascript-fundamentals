/*
Q22. Compare CommonJS and ES Modules. When choose each?

Solution (concise):
- CJS: require/module.exports, synchronous, widely used in Node (legacy).
- ESM: import/export, static analysis, tree-shakable, async loading.
- Prefer ESM for modern code; use CJS for compatibility.
*/

// Example (ESM pseudo):
// import { readFile } from 'fs/promises';
// export const txt = await readFile('file.txt', 'utf8');

module.exports = {};

