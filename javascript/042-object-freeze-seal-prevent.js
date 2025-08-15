/*
Q42. What do Object.freeze, Object.seal, and Object.preventExtensions do?

Solution (concise):
- freeze: no add/remove/change (deep freeze requires recursion).
- seal: no add/remove; can change existing writable props.
- preventExtensions: no add; can remove/change depending on descriptors.
*/

const obj = { a: 1 };
const frozen = Object.freeze({ ...obj });
const sealed = Object.seal({ ...obj });
const prevented = Object.preventExtensions({ ...obj });

module.exports = { frozen, sealed, prevented };

