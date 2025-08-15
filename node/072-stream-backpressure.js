/*
Q72. What is backpressure in streams and how do you handle it?

Solution (concise):
- When the writable cannot keep up with readable; internal buffers fill.
- Handle using stream.pipe (built-in flow control) or check write() return value and wait for 'drain'.
*/

module.exports = {};

