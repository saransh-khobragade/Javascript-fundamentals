/*
Q56. What is the Intl API and what problems does it solve?

Solution (concise):
- Built-in internationalization for numbers, dates, collation, plural rules.
*/

const nf = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const df = new Intl.DateTimeFormat('en-GB');

module.exports = { nf, df };

