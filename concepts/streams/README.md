# What are Streams?

In Node.js, a Stream is an abstract interface for working with streaming data (chunks of data flowing piece by piece).
They allow you to process data without loading the entire thing into memory — great for large files, network requests, etc.

Built on EventEmitter, so they emit events like:

    data → when a chunk arrives
    end → when no more data
    error → on error
    finish → when all data is written


# Types of Streams

Readable Streams
    Data flows from the source to your program.
    Example: fs.createReadStream(), http.IncomingMessage (request object).
    Events: data, end, error.
Writable Streams
    Data flows from your program to a destination.
    Example: fs.createWriteStream(), http.ServerResponse (response object).
    Events: drain, finish, error.
Duplex Streams
    Both Readable + Writable.
    Example: net.Socket, tls.TLSSocket.
Transform Streams
    A special type of Duplex stream that can modify or transform the data as it passes through.
    Example: zlib.createGzip(), crypto.createCipher()