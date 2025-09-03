/**
A special case of spawn(), designed specifically for spawning new Node.js processes.
Automatically sets up an IPC (Inter-Process Communication) channel with the child.
Makes it easy to send/receive messages using .send() and .on('message').
 */

const { fork } = require("child_process");
const child = fork("concepts/child-process/spawn-example.js");

// Parent to child
child.send({ msg: "Hello from parent" });

// Child to parent
child.on("message", (data) => {
  console.log("Message from child:", data);
});
