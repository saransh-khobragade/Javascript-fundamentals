/**
JavaScript has two main types of queues
Microtask queue → process.nextTick, Promise.then/catch/finally, queueMicrotask
Macrotask queue → setTimeout, setInterval, setImmediate, I/O callbacks

The event loop order is:
    Run one macrotask (like script start, setTimeout, setImmediate, etc.)
    Run all microtasks (till empty).
    Repeat.
 */
console.log("script start");

setImmediate(() => {
  console.log("setImmediate");
});

setTimeout(() => {
  console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("promise");
});

console.log("script end");

process.nextTick(() => {
  console.log("nextTick");
});

/**
(Whole script is macro rask,so its sync runs first)
script start (Sync task runs immedietely)
script end (Sync task runs immedietely)

nextTick (MicroTask)
promise (MicroTask process.nextTick > promise)

setTimeout (MacroTask)
setImmediate (MacroTask)

 ┌─────────────────────────────┐
 │        Call Stack           │
 └─────────────────────────────┘
        │
        ▼
script start  (sync)
script end    (sync)

───────────────────────────────
 Microtask Queue fills:
   - nextTick
   - promise
───────────────────────────────
 Macrotask Queue fills:
   - setTimeout
   - setImmediate
───────────────────────────────

 Event Loop Execution:
 ───────────────────────────────
 Phase 1 (sync execution):
   ✅ script start
   ✅ script end

 Phase 2 (microtasks):
   ✅ process.nextTick → "nextTick"
   ✅ Promise.then → "promise"

 Phase 3 (macrotasks - timers):
   ✅ setTimeout → "setTimeout"

 Phase 4 (macrotasks - check phase):
   ✅ setImmediate → "setImmediate"

 ───────────────────────────────
*/



