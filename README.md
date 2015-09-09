# cordova-auto-patch

  Automatically increment patch version in config.xml.

All it does is increments value of `version` key. For example, `1.0.1` becomes `1.0.2`.

Point to the directory with config.xml and cordova-auto-patch will do the rest.

## Installation
    npm install cordova-auto-patch --save

## Usage
    var patch = require('cordova-auto-patch');
    
    patch(./<path_to_config>/);

## License

MIT
