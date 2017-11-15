var sockets = require('./lib/sockets');

module.exports = sockets;
module.exports.createContext = createContext;
module.exports.createConnection = createContext;

function createContext(url, connOpts) {
  return new sockets.Context(url, connOpts);
}
