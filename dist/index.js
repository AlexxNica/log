'use strict';
exports.__esModule = true;
var log = {
    verboseLevel: 0,
    error: function (message) {
        return this.verboseLevel >= 0 && console.error(message);
    },
    warn: function (message) {
        return this.verboseLevel >= 0 && console.warn(message);
    },
    info: function (message) {
        return this.verboseLevel >= 1 && console.info(message);
    },
    debug: function (message) {
        // @TODO: change from .log to .debug.
        return this.verboseLevel >= 2 && console.log(message);
    },
    log: function (message) {
        return this.verboseLevel >= 0 && console.log(message);
    }
};
exports["default"] = log;
