var patch  = require('../lib/cordova-auto-patch');
var assert = require('assert');

assert.equal(patch('./test/'), true, 'return true on completion');