/*
Q31. How does fetch work? How is it different from XMLHttpRequest?

Solution (concise):
- fetch: Promise-based, streams, simpler API; no progress events; rejects only on network error.
- XHR: callback-based, progress events, older API.
*/

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('HTTP ' + res.status);
  return res.json();
}

module.exports = { getJson };

