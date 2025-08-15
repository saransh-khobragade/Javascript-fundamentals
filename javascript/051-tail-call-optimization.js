/*
Q51. What is tail call optimization? Is it supported in JS engines?

Solution (concise):
- TCO reuses the current stack frame for tail calls to avoid growth.
- Not reliably enabled in major JS engines in the wild; do not rely on it.
*/

function sumRec(n, acc = 0) {
  if (n === 0) return acc; // tail position
  return sumRec(n - 1, acc + n);
}

module.exports = { sumRec };

