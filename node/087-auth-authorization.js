/*
Q87. How do you implement authentication and authorization in Node APIs?

Solution (concise):
- AuthN: verify identity (sessions, JWTs, OAuth2).
- AuthZ: enforce permissions/roles/policies on routes/resources.
- Use middleware for verifying tokens/sessions and checking roles/claims.
*/

// Example (pseudo):
// app.use(requireSessionOrJwt);
// app.get('/admin', requireRole('admin'), (req, res) => res.send('ok'));

module.exports = {};

