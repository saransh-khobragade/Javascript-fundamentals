/*
Q88. When should you use sessions vs JWT-based stateless authentication?

Solution (concise):
- Sessions: server-stored state (store/DB); good for web apps, easy invalidation.
- JWT: stateless, self-contained claims; great for APIs/microservices; revocation is harder.
- Prefer short-lived JWT + refresh token and rotation; use HTTPS and secure cookies.
*/

module.exports = {};

