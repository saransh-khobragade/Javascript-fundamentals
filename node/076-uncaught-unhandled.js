/*
Q76. How do you handle uncaught exceptions and unhandled promise rejections in Node.js?

Solution (concise):
- Catch at boundaries; for last resort, log and exit gracefully.
- process.on('uncaughtException') and process.on('unhandledRejection') for global handling.
*/

function setupGlobalHandlers(logger = console) {
  process.on('uncaughtException', (err) => {
    logger.error('Uncaught Exception', err);
    shutdown(1);
  });
  process.on('unhandledRejection', (reason) => {
    logger.error('Unhandled Rejection', reason);
    shutdown(1);
  });
}

function shutdown(code = 0) {
  // flush logs, close DB, stop server, etc.
  setTimeout(() => process.exit(code), 10);
}

module.exports = { setupGlobalHandlers, shutdown };

