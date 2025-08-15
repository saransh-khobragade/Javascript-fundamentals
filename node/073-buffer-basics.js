/*
Q73. What is a Buffer in Node.js and how do you use it?

Solution (concise):
- Raw binary data container; useful for I/O, encoding/decoding.
*/

const b = Buffer.from('hello', 'utf8');
const hex = b.toString('hex');

module.exports = { b, hex };

