/*
Q1. What are the differences between var, let, and const?

Solution (concise):
- var: function-scoped, hoisted with initialization to undefined, can be re-declared.
- let: block-scoped, hoisted but in TDZ until declaration, re-assignable, not re-declarable in same scope.
- const: block-scoped, TDZ, binding immutable (object/array contents can still be mutated).
- Guideline: prefer const; use let when re-assignment is needed; avoid var.
*/

// Examples
function demoVarLetConst() {
  var canReDeclare = 1;
  var canReDeclare = 2; // allowed

  let canReassign = 1;
  canReassign = 2; // allowed

  const bindingIsImmutable = 1;
  // bindingIsImmutable = 2; // TypeError if uncommented

  if (true) {
    var functionScoped = 'var-in-block';
    let blockScopedLet = 'let-in-block';
    const blockScopedConst = 'const-in-block';
  }

  return {
    canReDeclare,
    canReassign,
    bindingIsImmutable,
    functionScoped, // accessible (var is function-scoped)
    blockScopedLetIsDefined: typeof blockScopedLet !== 'undefined',
    blockScopedConstIsDefined: typeof blockScopedConst !== 'undefined',
  };
}

module.exports = { demoVarLetConst };

