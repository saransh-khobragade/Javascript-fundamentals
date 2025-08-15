/*
Q89. What is CORS on a Node server and how do you configure it safely?

Solution (concise):
- Server must send Access-Control-Allow-* headers for allowed origins/methods/headers.
- Restrict origins, methods, credentials; avoid "*" with credentials.
*/

// Example (pseudo):
// res.setHeader('Access-Control-Allow-Origin', 'https://example.com');
// res.setHeader('Access-Control-Allow-Credentials', 'true');
// res.setHeader('Vary', 'Origin');

module.exports = {};

