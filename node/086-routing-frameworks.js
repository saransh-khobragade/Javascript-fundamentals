/*
Q86. How does routing work in popular Node frameworks (Express, Koa, Fastify)?

Solution (concise):
- Express: router-based, middleware chain per route.
- Koa: middleware (async/await) with context; routing via koa-router or @koa/router.
- Fastify: declarative routes with schemas; very fast, built-in validation.

Examples (pseudo):
// Express
// const app = require('express')();
// app.get('/users/:id', (req, res) => res.json({ id: req.params.id }));

// Koa (@koa/router)
// const Koa = require('koa'); const Router = require('@koa/router');
// const app = new Koa(); const router = new Router();
// router.get('/users/:id', (ctx) => ctx.body = { id: ctx.params.id });
// app.use(router.routes());

// Fastify
// const fastify = require('fastify')();
// fastify.get('/users/:id', { schema: { params: { id: { type: 'string' } } } }, (req, rep) => rep.send({ id: req.params.id }));
*/

module.exports = {};

