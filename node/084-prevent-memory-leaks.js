/*
Q84. How do you prevent and detect memory leaks in long-running Node processes?

Solution (concise):
- Remove listeners/timers, use WeakRefs/WeakMaps, avoid globals, bound caches.
- Monitor RSS/heap, use heap snapshots and leak detectors in staging.
*/

module.exports = {};

