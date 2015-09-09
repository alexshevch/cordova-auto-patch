/**
 * Automatically increment patch version in config.xml
 *
 * @author Oleksii Shevchenko <shevaroller@gmail.com> (http://shevaroller.me)
 * @since  9 September 2015
 */
var xml2js = require('xml2js');
var fs = require('fs');

var cordovaPatch;

cordovaPatch = function (path) {
  var parser = new xml2js.Parser();
  var name = 'config.xml';
  var file = path + name;

  fs.readFile(file, {encoding:'utf8'}, function (error, data) {
    if (error) throw error;

    parser.parseString(data, function (err, config) {
      if (err) throw err;

    }
  }
};

/**
 * Exports Module cordovaPatch
 */
module.exports = cordovaPatch;