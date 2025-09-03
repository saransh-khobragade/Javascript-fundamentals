# Event loop

The event loop is a core concept in JavaScript that enables non-blocking, asynchronous behavior on single thread.

In browsers, the event loop alternates between macrotasks (like setTimeout) and microtasks (like Promises) to keep the UI responsive. In Node.js, the event loop is powered by libuv and has multiple phases (timers, poll, check, etc.), with microtasks and process.nextTick running between those phases.

* Event loop
    - Incoming request callbacks are put into event queue.
    - Event loop picks up the requests from queue and process it.
    - For each request node execute the associated callback function, if its IO operation it delegates it to thread pool
    - Node uses a libuv lib which manages thread pool to handle IO operations, oncs handled place back into Event queue.

## In JavaScript (Browser Perspective)
The event loop is part of the browser’s Web APIs + task queues + JS engine (V8).
It manages:
    Call stack (executes synchronous JS).
    Task queues:
        Macrotasks → setTimeout, setInterval, UI events, network events.
        Microtasks → Promise.then, MutationObserver.
    Flow: Run one macrotask → drain all microtasks → render (if needed) → repeat.
    Goal: Keep UI responsive while running async tasks.

## In Node.js Perspective

Node uses libuv under the hood, which defines a more detailed event loop with phases:

After sync tasks
For Asyc tasks Node.js Event Loop Phases (libuv)

    Timers phase
        Executes callbacks scheduled by setTimeout and setInterval if their time has expired.
    
    Pending callbacks phase
        Executes I/O callbacks deferred to the next loop iteration (like TCP errors).
    
    Idle, prepare (internal)
        Used internally by Node/libuv. You don’t usually interact with this.
    
    Poll phase
        Waits for incoming I/O (network, fs, etc.).
        Executes callbacks for completed I/O.
        If no timers are ready, it can block here and wait.
    
    Check phase
        Executes setImmediate callbacks.
    
    Close callbacks phase
        Executes close event callbacks (like socket.on('close')).

Microtasks (Promises, process.nextTick) run between each phase, before moving on.

Note:
Browsers don’t have setImmediate.
    That’s a Node.js-only API (it comes from the underlying libuv implementation).
    
General Rule in Node.js
    Yes → setTimeout / setInterval are checked first in the Timers phase.
    Then → setImmediate callbacks run in the Check phase, which comes after Poll.
    So in a normal script (outside of I/O), timers will usually fire before setImmediate.
⚡ But There’s a Twist
    If you’re inside an I/O callback (like fs.readFile, net, etc.):
    The event loop just finished the Poll phase.
    Next phase is Check → so setImmediate runs before timers.