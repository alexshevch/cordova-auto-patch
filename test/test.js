var patch  = require('../lib/cordova-auto-patch');
var assert = require('assert');

assert.equal(patch('./test/'), true, 'return true on patching with a path argument');
assert.equal(patch('./test/', '2.8.64'), true, 'return true on patching with a path and version arguments');