/*
Q81. What are npm scripts and common patterns for using them?

Solution (concise):
- Define task aliases in package.json scripts; compose with && and pre/post hooks.
- Use cross-env for env vars portability; use npm-run-all for parallel/series runs.
*/

// Example package.json fragment:
// {
//   "scripts": {
//     "dev": "node index.js",
//     "build": "tsc -p .",
//     "start": "node dist/server.js",
//     "test": "jest --runInBand",
//     "prestart": "npm run build"
//   }
// }

module.exports = {};

