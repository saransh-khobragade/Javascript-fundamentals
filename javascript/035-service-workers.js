/*
Q35. What is a Service Worker? Lifecycle and caching strategies.

Solution (concise):
- Lifecycle: install → activate → fetch; runs off main thread; intercepts network.
- Caching: cache-first, network-first, stale-while-revalidate; use Cache Storage API.
*/

// Pseudo SW:
// self.addEventListener('install', (e) => e.waitUntil(caches.open('v1')));
// self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)));

module.exports = {};

