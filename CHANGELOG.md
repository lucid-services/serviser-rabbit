rabbit.js release notes
=======================

v0.5.2
------

* [CHANGED] - change project name to `serviser-rabbit`

v0.5.1
------

* [ADDED] - `createConnection` alias of `createContext` method of the exported module
* [ADDED] - `inspectIntegrity` method to the `Context` connection prototype

v0.5.0
------

* [CHANGED] - streams work with the whole `message` objects as opposed to `message.content` data buffer
* [ADDED] - Allow to define `contentType` option when instantiating a new Socket
* [ADDED] - Allow to declare `Publish` & `Subscribe` sockets durable with persistent messages


v0.4.4
------

This release updates the version of amqplib used to a much more recent
release, amqplib v0.3.2.

v0.4.3
------

This release adds entries to the "engine" specification, so rabbit.js
can be used with io.js and Node.js 0.12.

v0.4.2
------

This release adds:

 * TASK sockets, for posting and different varieties of task
 * `#requeue` and `#discard` for WORKER sockets
 * `'blocked'` and `'unblocked'` events, on connections

v0.4.1
------

This release adds:

 * The socket option 'topic' and PubSocket#publish() for sending
   messages with topics
 * The ability to specify topic matching when using a SUB socket.
 * The socket option 'persistent' for making messages survive server
   restarts

Supports:
 - Node.JS v0.8, v0.9, v0.10, v0.11

v0.4.0
------

This release adds the [WORKER][socket-types] socket.

Supports:
 - Node.JS v0.8, v0.9, v0.10, v0.11

v0.3.1
------

This release bumps the version of amqplib used.

Supports:
 - Node.JS v0.8, v0.10, v0.11

v0.3.0
------

This release moves over to the [amqplib][]-based rewrite.

There are some small improvements to the API over both v0.2.1-amqplib
and v0.2.2:

 * `Socket#end` and `Socket#close` and the `'end'` and `'close'`
   events now behave like their Stream counterparts
 * More than one REQ may be in-flight; the replies are put in order to
   be read

Supports:
 - Node.JS v0.8, v0.10, v0.11

v0.2.1-amqplib
--------------

This release is a rewrite of rabbit.js using [amqplib][] instead of
node-amqp. It is intended to be API-compatible with rabbit.js
v0.2.1. The version is given a suffix (`-amqplib`) for now, so that
v0.2.1 will still be regarded as the "latest" version, and the rewrite
is on the branch `amqplib` in the rabbit.js github
repository. However, future versions will likely be developed from
this branch; i.e., it will be merged into master, and the
implementation using node-amqp abandoned.

Supports:
 - Node.JS v0.8, v0.10

v0.2.2
------

Supports:
 - Node.JS v0.6, v0.8, v0.10

Changes since v0.2.1:

 * Queues and exchanges are cleaned up when sockets are closed
   (https://github.com/squaremo/rabbit.js/pull/43)

 * Expiration of pub and push messages (via `setsockopt`)
   (https://github.com/squaremo/rabbit.js/pull/41)

*NB* I expect this to be the last release based on node-amqp. Future
releases will likely use amqplib; however, I will keep the API
compatible so far as possible (v0.2.1-amqplib is compatible).

v0.2.1
------

Supports:
 - Node.JS v0.6, v0.8, v0.10*

*node-amqp presently does not claim to support Node.JS 0.10, but
 appears to run OK.

Main changes since v0.2:

 * Use util.inherits consistently instead of working coincidentally
   (https://github.com/squaremo/rabbit.js/pull/35,
   https://github.com/squaremo/rabbit.js/issues/37 and
   https://github.com/squaremo/rabbit.js/issues/38)

 * Channel-level (i.e., most) errors are propagated through to
   rabbit.js sockets (https://github.com/squaremo/rabbit.js/issues/28)

 * Depends on a recent node-amqp
   (https://github.com/squaremo/rabbit.js/pull/27 and
   https://github.com/squaremo/rabbit.js/issues/25)

 * Finally has some smoke tests


[amqplib]: https://squaremo.github.com/amqp.node
[socket-types]: https://github.com/squaremo/rabbit.js#socket-types

