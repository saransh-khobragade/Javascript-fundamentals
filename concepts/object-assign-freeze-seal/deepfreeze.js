function deepFreeze(obj) {
  // Get property names of the object
  const propNames = Object.getOwnPropertyNames(obj);

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];
    // If value is an object, recurse
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

// Example
const user = {
  name: "Alice",
  address: { city: "NY" }
};

const frozenUser = deepFreeze(user);

frozenUser.address.city = "LA"; // ❌ ignored
console.log(frozenUser.address.city); // "NY"
