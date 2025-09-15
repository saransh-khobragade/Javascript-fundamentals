// function sum(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// console.log(sum(5)(6)); // 11

function variadicCurrySum(...args) {
    let total = args.reduce((a, b) => a + b, 0);

    function inner(...next) {
        if (next.length === 0) {
            return total;
        }
        total += next.reduce((a, b) => a + b, 0);
        return inner;
    }
    return inner;
}
console.log(variadicCurrySum(1)(2, 3)(3)(4, 6)());

function variadicCurryMultiply(...args) {
    let total = args.reduce((a, b) => a * b, 1);

    function inner(...next) {
        if (next.length === 0) {
            return total;
        }
        total *= next.reduce((a, b) => a * b, 1);
        return inner;
    }

    return inner;
}
console.log(variadicCurryMultiply(1)(2, 3)(3)(4, 6)());
