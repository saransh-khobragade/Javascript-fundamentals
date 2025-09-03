# NodeJs Interview Questions

* Node vs Java vs Go
    - Node
        - Best for I/O-heavy, real-time, event-driven applications
        - fast development of fullstack apps / MVP
    - Go
        - Best for concurrent CPU heavy tasks
        - Best for high-performance on low resource, concurrent, cloud-native applications
        - System-level tools (CLI tools, networking libraries, devops tooling).
    - Java
        - Enterprise applications, scalable
        - Production readiness
        - Robust frameworks

* Is Node.js single threaded
    - Node.js is based on single threaded architecture(Javascript).Using Event loop it gets it async qualities
    - Node.js internally used a library libuv which manages lower level async operations but abstracted for nodejs.
    - for any File IO node does not handle it directly, libuv does it for it.
    
* Event loop
    - Incoming request callbacks are put into event queue.
    - Event loop picks up the requests from queue and process it.
    - For each request node execute the associated callback function, if its IO operation it delegates it to thread pool
    - Node uses a libuv lib which manages thread pool to handle IO operations, oncs handled place back into Event queue.

* What is the V8 Engine?
    - V8 is an open-source JavaScript engine developed by Google, written in C++.
    - features
        - Just-In-Time (JIT) Compilation
        - Garbage Collection
        - High Performance
    - why v8
        - Speed → JIT compilation makes Node.js very fast at executing JS.
        - Cross-platform → V8 is portable (Windows, Linux, macOS).
        - Native bindings → Node.js can bridge JavaScript with C++ for system-level APIs.
        - Non-browser environment → Node.js reuses V8 to execute JS outside the browser (server-side).

* setImmediate() vs process.nextTick() vs setTimeout()
    - setImmediate() and setTimeout() are Macro task in event loop, setTimeout runs in timer phase and setImmediate run after in check phase
    - process.nextTick() in a micro task runs in between macros task before all other micro tasks.

* What are Streams in Node.js? Types of streams?
    - Streams in Node.js are objects that let you read or write data sequentially in chunks instead of loading everything at once. 
    - There are 4 types of streams: 
        Readable
        Writable
        Duplex (both)
        Transform (modify data while streaming).

* What is Callback Hell?
    - Callback hell happens when callbacks are nested inside other callbacks multiple levels deep.
    - Unreable, hard to maintain
    - Solution
        - Promises
        - Async/Await

* How does Node.js handle child processes?
    - Node.js runs JavaScript in a single thread by default.
    - But it can create child processes using the child_process module to execute tasks in parallel.
    - Each child process runs independently with its own event loop, memory, and V8 instance.
    - Parent and child processes communicate via IPC (inter-process communication) using message passing over stdio.
    - When we should use child process
        - Offload CPU-intensive tasks (e.g., image processing, encryption).
        - Run multiple tasks in parallel.

* child process fork() vs spawn()
    - spawn() - General-purpose method for starting any new process. communication - streams
    - fork() - A special case of spawn(), designed specifically for spawning new Node.js processes/files,communication - events

* Process vs Threads
    - A process is an instance of a program.
    - A thread is a single unit of execution within a process.There might be multiple threads within process.
    
* npm vs pnpm vs yarn vs bun
    - npm
        - wide compatibility
        - flat and heavy node_modules
    - yarn
        - Created by Facebook (2016) to fix npm’s performance/reliability issues.
        - Parallel installation
        - Supports workspaces (monorepos).
    - pnpm
        - symlinked node_modules
        - Saves packages in a global content-addressable store (deduplication).
        - Much smaller disk usage + faster installs.
        - Supports monorepos via pnpm workspaces.
    - bun
        - Not just a package manager → it’s an all-in-one runtime (like Node.js + npm + bundler).
        - Written in Zig (much faster than JS/C++ in some cases).
        - Includes transpiler + bundler + test runner.
        
* Commonjs vs Es modules
    - commonjs
        - sync loading(require())
    - es module
        - async loading (import,export)
        - tree shaking

