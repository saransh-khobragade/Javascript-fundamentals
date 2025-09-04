const fs = require("fs");

const readable = fs.createReadStream("bigfile.txt");
const writable = fs.createWriteStream("copy.txt");

// Naive piping (handles backpressure internally)
readable.pipe(writable);

// Manual write (no backpressure handling)
readable.on("data", (chunk) => {
  const canWrite = writable.write(chunk); // returns false if buffer is full
  if (!canWrite) {
    console.log("Backpressure detected!");
    readable.pause();  // stop reading temporarily
    writable.once("drain", () => readable.resume()); // resume when writable is free
  }
});
