/*
Q3. What is the temporal dead zone (TDZ)?

Solution (concise):
- From block start to declaration, let/const exist but cannot be accessed.
- Accessing before declaration throws ReferenceError.
- Prevents use-before-declare bugs; encourages clear ordering of declarations.
*/

// Examples
function demoTDZ() {
  const observed = [];
  try {
    // observed.push(x); // Uncommenting before declaration throws ReferenceError
  } catch (e) {
    observed.push('TDZ ReferenceError');
  }
  let x = 10;
  observed.push(x);
  return observed;
}

module.exports = { demoTDZ };

