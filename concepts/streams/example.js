const fs = require("fs");

// Create input.txt if not exists
fs.writeFileSync("input.txt", "Hello from Node.js streams!\n");

// Now pipe it
const readable = fs.createReadStream("input.txt", "utf8");
const writable = fs.createWriteStream("output.txt");

readable.pipe(writable);