/** @license React vundefined
 * react-noop-renderer-server.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

var ReactFizzServer = require('react-server');

/**
 * This is a renderer of React that doesn't have a render target output.
 * It is useful to demonstrate the internals of the reconciler in isolation
 * and for testing semantics of reconciliation separate from the host
 * environment.
 */
var ReactNoopServer = ReactFizzServer({
  scheduleWork: function (callback) {
    callback();
  },
  beginWriting: function (destination) {},
  writeChunk: function (destination, buffer) {
    destination.push(JSON.parse(Buffer.from(buffer).toString('utf8')));
  },
  completeWriting: function (destination) {},
  close: function (destination) {},
  flushBuffered: function (destination) {},
  convertStringToBuffer: function (content) {
    return Buffer.from(content, 'utf8');
  },
  formatChunkAsString: function (type, props) {
    return JSON.stringify({
      type: type,
      props: props
    });
  },
  formatChunk: function (type, props) {
    return Buffer.from(JSON.stringify({
      type: type,
      props: props
    }), 'utf8');
  }
});

function render(children) {
  var destination = [];
  var request = ReactNoopServer.createRequest(children, destination);
  ReactNoopServer.startWork(request);
  return destination;
}

exports.render = render;
  })();
}
