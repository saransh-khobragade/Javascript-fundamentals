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

* What is Backpressure?
    - Backpressure happens when the Writable stream cannot consume data as fast as the Readable stream is producing it.

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
    
* process.exit() vs process.kill() vs process.abort()
    - process.exit([code])
        - Terminates the current Node.js process gracefully with an optional exit code.
        - Use when you want to terminate the process on purpose (e.g. after a CLI tool finishes, or when handling a fatal error cleanly).
    - process.kill(pid[, signal])
        - Used to communicate with other processes, such as stopping child processes or signaling long-running tasks.
    - process.abort()
        - Forcibly terminates the process and generates a core dump.

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

* How do you scale a Node.js application? (PM2, clustering, load balancing, etc.)
    - Single machine scaling
        - Cluster module (built-in)
            - Pros: native, simple. Cons: manual management, logs/restarts yourself.
        - PM2 (process manager) — recommended
            - Pros: zero-downtime deploys, log rotation, health checks, auto-restart, metrics.
            - Cons: single-host only (you still need LB across hosts).
    - Multiple machine
        - Loadbalancer( NGINX )
        - Container orchestration (docker, kubernetes)
        - Statelessness
            - Move state out of process: sessions → Redis (e.g., connect-redis), file uploads → object storage (S3/GCS), WebSocket scale → Redis pub/sub or NATS.   
    - Handle sessions & websockets
        - If you must have sessions, use sticky sessions at the LB or a shared store (Redis) to make any instance serve any user.
        - WebSockets at scale: LB with WS support + Redis adapter for Socket.IO (socket.io-redis) or a managed broker (Ably/Pusher).
    - Caching & performance layers
        - Edge/CDN: cache static assets & API GET responses (when safe).
        - App cache: Redis/Memcached for hot keys, rate limits, feature flags.
        - DB optimization: indexes, read replicas, connection pooling (e.g., pg-pool).
        - HTTP keep-alive, gzip/br, ETags, conditional GETs.
    - CPU-bound work (don’t block the event loop)
        - Use Worker Threads (same process) or child processes / bull + Redis for queues.
    - Observability & resilience
        - Metrics: Prometheus + Grafana, or PM2 Plus, or OpenTelemetry.
        - Logs: structured JSON (pino/winston) → ELK/Datadog.
        - Tracing: OpenTelemetry SDK → Jaeger/Tempo/Datadog.
        - Rate limiting / circuit breakers: rate-limiter-flexible, opossum.
    - Deployment patterns
        - Zero-downtime: pm2 reload, K8s rolling updates.
        - Blue/Green or Canary: route % traffic to new version; roll forward/back quickly.
        - Config & secrets: env vars, Vault/SSM; 12-factor.

* What are some common memory leaks in Node.js, and how do you debug them?
    - Node leaks usually come from long-lived references: uncleared timers, listener pileups, unbounded caches, dangling streams, and closures. I prove a leak with heap snapshots diffed via --inspect, verify with --trace-gc, and locate retainers (often Maps/listeners). I fix by bounding memory, clearing resources, using pipeline(), and adding timeouts and once/off.

    - Forgotten timers/intervals
    - Event listeners not removed
    - Unbounded caches / maps
    - Accidentally global / long-lived references
    - Closures capturing large state
    - Promise chains & async tasks never settling
    - Child processes / workers not cleaned up
    - Native add-ons / buffers
