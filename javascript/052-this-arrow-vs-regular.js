/*
Q52. How does this behave in arrow functions vs regular functions?

Solution (concise):
- Regular: this is dynamic (call-site). Arrow: lexical this from enclosing scope.
*/

const ctx = { value: 1 };
function regular() { return this && this.value; }
const arrow = () => (typeof this === 'undefined' ? 'undefined-this' : this.value);

module.exports = { ctx, regular, arrow };

