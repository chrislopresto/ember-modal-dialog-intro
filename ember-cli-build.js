/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    fingerprint: {
      enabled: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('bower_components/highlightjs/styles/tomorrow-night-eighties.css');

  if (app.env === 'development') {
    app.options.fingerprint.prepend = 'http://localhost:7149/';
    app.options.fingerprint.customHash = null;
  }

  if (app.env === 'production') {
    app.options.fingerprint.prepend = 'https://ember-modal-dialog-intro-assets.s3.amazonaws.com/';
  }

  return app.toTree();
};
