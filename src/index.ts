'use strict';

const log = {
  verboseLevel: <number> 0,
  error: function(message: string) {
    return this.verboseLevel >= 0 && console.error(message);
  },
  warn: function(message: string) {
    return this.verboseLevel >= 1 && console.warn(message);
  },
  info: function(message: string) {
    return this.verboseLevel >= 2 && console.info(message);
  },
  debug: function(message: string) {
    // @TODO: change from .log to .debug.
    return this.verboseLevel >= 3 && console.log(message);
  },
  log: function(message: string) {
    return this.verboseLevel >= 4 && console.log(message);
  },
};

export default log;
