//---------Object.assign(target, ...sources)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const merged = Object.assign({}, obj1, obj2,{ c : 6 });     //properties comes later, will replace earlier ones
console.log(merged); // { a: 1, b: 3, c: 6 }


//---------Object.seal(obj) only update existing properties
const user = { name: "Alice", age: 25 };

Object.seal(user);

user.age = 30;     // ✅ allowed (modifying existing property)
user.city = "NY";  // ❌ ignored new property
delete user.name;  // ❌ ignored

console.log(user); // { name: "Alice", age: 30 }


//---------Object.freeze (Make an object complete immutable only for top level properties, not deep nested ones)
const user2 = { name: "Alice", age: 25 };

Object.freeze(user2);

user2.age = 30;   // ❌ ignored (in strict mode → TypeError)
user2.city = "NY"; // ❌ ignored
delete user2.name; // ❌ ignored

console.log(user2); // { name: "Alice", age: 25 }