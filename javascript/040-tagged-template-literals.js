/*
Q40. What are tagged template literals and what can they do?

Solution (concise):
- A function (tag) processes template literal parts and interpolations.
- Useful for sanitization, i18n, custom DSLs.
*/

function tag(strings, ...values) {
  return strings.reduce((acc, s, i) => acc + s + (values[i] ?? ''), '');
}

const result = tag`Hello ${'World'}!`;

module.exports = { tag, result };

