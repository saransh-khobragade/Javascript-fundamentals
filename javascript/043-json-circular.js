/*
Q43. How does JSON.stringify handle circular references? Workarounds?

Solution (concise):
- JSON.stringify throws TypeError on circular structures.
- Workarounds: custom replacer, libraries (flatted), or remove cycles.
*/

function safeStringify(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (k, v) => {
    if (typeof v === 'object' && v !== null) {
      if (seen.has(v)) return '[Circular]';
      seen.add(v);
    }
    return v;
  });
}

module.exports = { safeStringify };

