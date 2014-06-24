module.exports =
  preprocessors:
    "**/*.coffee": ["coffee"]
    "**/*.html": ["ng-html2js"]

  coffeePreprocessor:
    options:
      bare: false
      sourceMap: false

  ngHtml2JsPreprocessor:
    stripPrefix: "app"

  browsers: ["PhantomJS"]
  frameworks: ["jasmine"]
  files: [
    "spec/helpers/*.js"
    "generated/js/vendor.js"
    "generated/js/angular.js"
    "generated/js/app.js"
    "vendor/bower/angular-mocks/angular-mocks.js"
    "spec/js/**/*.coffee"
    "app/templates/**/*.html"
  ]
