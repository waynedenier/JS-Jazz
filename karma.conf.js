// Karma configuration
// Generated on Mon Feb 10 2014 10:49:50 GMT-0600 (Central Standard Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/PhoenixApi/Scripts/external/jquery.js',
      'src/PhoenixApi/Scripts/external/toastr.min.js',
      'src/PhoenixApi/Scripts/external/chai/chai.js',
	  'src/PhoenixApi/Scripts/external/require.js',
      'src/PhoenixApi/Scripts/external/angular/angular-file-upload-shim.js',
      'src/PhoenixApi/Scripts/external/angular/angular.min.js',
      'src/PhoenixApi/Scripts/external/angular/angular-mocks.js',
      'src/PhoenixApi/Scripts/external/angular/angular-route.min.js',
      'src/PhoenixApi/Scripts/external/angular/angular-animate.js',
      'src/PhoenixApi/Scripts/external/angular/angular-file-upload.js',
      'src/PhoenixApi/Scripts/external/angular/angular-sanitize.js',
      'src/PhoenixApi/Scripts/external/angular/angular-route.js',
      'src/PhoenixApi/Scripts/application/**/app.js', 
      'src/PhoenixApi/Scripts/application/**/services/*.js',
      'src/PhoenixApi/Scripts/application/**/controllers/*.js',
      'src/PhoenixApi/Scripts/application/**/*.js',
      'src/PhoenixApi/Scripts/tests/**/*.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
