/*
Q13. What are Promises? Describe their states and chaining.

Solution (concise):
- States: pending → fulfilled or rejected (settled).
- then returns a new Promise; errors propagate to the next catch.
- Use finally for cleanup regardless of outcome.
*/

function fetchSim(success = true) {
  return new Promise((resolve, reject) =>
    setTimeout(() => (success ? resolve('OK') : reject(new Error('FAIL'))), 0)
  );
}

function demoPromiseChain() {
  return fetchSim()
    .then((v) => v + '!')
    .then((v) => v.toLowerCase())
    .catch((e) => 'error:' + e.message)
    .finally(() => undefined);
}

module.exports = { fetchSim, demoPromiseChain };

