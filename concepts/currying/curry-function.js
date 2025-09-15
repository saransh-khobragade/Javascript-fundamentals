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
// console.log(curriedAdd(1, 2)(3)); // 6
// console.log(curriedAdd(1)(2, 3)); // 6

// Full application in one go
// console.log(curriedAdd(1, 2, 3)); // 6

//ADVANCED When sum argument is not fixed to 3(x,y,z)
function variadicCurryFn(fn) {
    return function curried(...args) {
        const collected = [...args];
        function next(...more) {
            if (more.length === 0) return fn(...collected);
            collected.push(...more);
            return next;
        }
        return next;
    };
}

// Example
const sum = (...nums) => nums.reduce((a, b) => a + b, 0);
const v = variadicCurryFn(sum);

console.log(v(1)(2)(3)(4)()); // 10
console.log(v(5, 6)(7)()); // 18
console.log(v(1, 2, 3)()); // 6
