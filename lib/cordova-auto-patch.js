/**
 * Automatically increment patch version in config.xml
 *
 * @author Oleksii Shevchenko <shevaroller@gmail.com> (http://shevaroller.me)
 * @since  9 September 2015
 */
var xml2js = require('xml2js');
var fs     = require('fs');

var cordovaPatch;

cordovaPatch = function () {
  var params = {encoding:'utf8'};
  var parser = new xml2js.Parser();
  var name = 'config.xml';
  var path = '';
  var version = null;

  // get manual path to the config folder
  if (arguments[0] != null) {
    path = arguments[0];
  }

  // get manual version string
  if (arguments[1] != null) {
    version = arguments[1];
  }

  var file = path + name;

  fs.readFile(file, params, function (error, data) {
    if (error) throw error;

    parser.parseString(data, function (err, config) {
      if (err) throw err;

      var newVersion;
      if (version == null) {
        var currentVersion, splitVersion;

        // read version from the config file
        currentVersion = config.widget.$.version;
        splitVersion = currentVersion.split('.');

        // ensure that version has a patch version
        while (splitVersion.length < 3) {
          splitVersion.push(0);
        }

        // increment patch version
        patchVersion = Number(splitVersion[2]) + 1;
        splitVersion[2] = patchVersion.toString();

        newVersion = splitVersion.join('.');
      }
      else {
        newVersion = version;
      }
      // write back to config
      var builder = new xml2js.Builder();
      config.widget.$.version = newVersion;
      var newConfig = builder.buildObject(config);

      fs.writeFile(file, newConfig, params, function (er) {
        if (er) throw er;
        console.log("Build version:", newVersion);
      });
    });
  });

  return true;
};

/**
 * Exports Module cordovaPatch
 */
module.exports = cordovaPatch;