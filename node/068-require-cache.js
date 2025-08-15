/*
Q68. What is the require cache and how can you invalidate or bypass it?

Solution (concise):
- require caches modules by absolute path in require.cache.
- Invalidate: delete require.cache[require.resolve(path)]; bypass via dynamic import or re-require after delete.
*/

module.exports = {};

