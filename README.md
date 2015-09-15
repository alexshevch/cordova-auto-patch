# cordova-auto-patch

  Automatically increment patch version in config.xml.

All it does is increments value of `version` key. For example, `1.0.1` becomes `1.0.2`.

Point to the directory with config.xml and cordova-auto-patch will do the rest.


# Update 1.2.0

The latest update does not break your previous code, but adds an option to manually set version number.

To do that, pass full version number in a string format as the second parameter.


## Installation
    npm install cordova-auto-patch --save

## Usage
    var patch = require('cordova-auto-patch');
    
    // to autoincrement the patch part of the version
    patch('./<path_to_config>/');

    // to manually set the version
    patch('./<path_to_config>/', '1.0.14');

Use it with your gulp or grunt cordova build tasks:

    gulp.task('build', function() {
        return gulp.src(<cordova project source path>)
            .pipe(create())
            .pipe(plugin(<add plugins>))
            .pipe(patch(<cordova project source path>))
            .pipe(cordova build())
            .pipe(gulp.dest(<cordova project build path>));

## License

MIT
