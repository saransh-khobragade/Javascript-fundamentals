/**
call → Call now, pass args one by one.
apply → Call now, pass args in an array.
bind → Don’t call now, return a new function with context set.
 */

const person = {
    name: "Alice",
};

function greet(greeting, punctuation) {
    console.log(`${greeting}, my name is ${this.name}${punctuation}`);
}

//-------------------------Call-----------------------------------------------
greet.call(person, "Hello", "!");
// Output: Hello, my name is Alice!
// Immediately calls the function.
// Pass arguments one by one.

//---------------------------Apply--------------------------------------------

greet.apply(person, ["Hi", "!!"]);
// Output: Hi, my name is Alice!!
// Immediately calls the function.
// Pass arguments as an array.

//----------------------------Bind-------------------------------------------

const greetAlice = greet.bind(person);
greetAlice("Hey", "?");
// Output: Hey, my name is Alice?
// Does not call immediately.
// Returns a new function with this bound (and optionally some arguments).

//Array examples

//Call
function demo() {
    // arguments is array-like
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr);
}

demo(1, 2, 3, 4); // [1, 2, 3, 4]

//Apply
const nums = [10, 5, 20, 3];

console.log(Math.max.apply(null, nums)); // 20
console.log(Math.min.apply(null, nums)); // 3

//Bind
const numbers = [1, 2, 3, 4, 5];

// Borrow Array.prototype.map and bind it to numbers
const mapNumbers = Array.prototype.map.bind(numbers);

const doubled = mapNumbers((x) => x * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
