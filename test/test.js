var patch  = require('../lib/cordova-auto-patch');
var assert = require('assert');

assert.equal(
  patch('./test/'), 
  'build version: 1.0.2',
  'increment patch version in config.xml'
  );