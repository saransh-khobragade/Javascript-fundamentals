/*
Q48. What are optional chaining (?.) and nullish coalescing (??)?

Solution (concise):
- ?. safely accesses nested properties; returns undefined if any part is null/undefined.
- ?? returns right-hand side only if left-hand side is null or undefined (not falsy like 0/"").
*/

const user = { profile: { name: 'Ada' } };
const city = user.address?.city; // undefined (no throw)
const count = 0;
const safeCount = count ?? 10; // 0 (not replaced)

module.exports = { user, city, safeCount };

