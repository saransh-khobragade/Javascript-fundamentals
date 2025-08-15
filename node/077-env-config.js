/*
Q77. How do you manage environment variables and configuration across environments?

Solution (concise):
- Use process.env with a config layer; validate and provide defaults.
- For local dev, use a .env loader (dotenv) but never commit secrets.
*/

const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 3000),
  databaseUrl: process.env.DATABASE_URL || 'postgres://localhost/app',
};

module.exports = { config };

