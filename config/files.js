/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/js/underscore.js",
        "vendor/bower/angular/angular.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    }
  };
};