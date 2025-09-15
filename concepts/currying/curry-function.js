function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);



// Partial applications
// console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
// console.log(curriedAdd(1)(2, 3)); // 6

// Full application in one go
// console.log(curriedAdd(1, 2, 3)); // 6