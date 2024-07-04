//Array with space upto length given, if keys,value not sure it will be undefined
let arrayLikeObject = {
    length: 5,
    0: 1,
    1: 2
}
console.log(Array.from(arrayLikeObject)) //[ 1, 2, undefined, undefined, undefined ]