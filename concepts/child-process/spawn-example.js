/**
General-purpose method for starting any new process.
Can run any command (system binary, script, executable).
Uses streams (stdout, stderr) for communication.
 */
const { spawn } = require("child_process");
const ls = spawn("ls", ["-lh", "/usr"]);
ls.stdout.on("data", (data) => console.log(`Output: ${data}`));
