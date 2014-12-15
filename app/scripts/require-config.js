'use strict';

// We use Cajon instead of RequireJS, which is mostly compatible with RequireJS
// We have to use it because it uses the XHR+eval method of loading scripts, which ensures they load in the proper context (due to the Chrome extension constraints)

// Configure RequireJS with Bower components--update with "grunt bower"
require.config({
  shim: {

  },
  baseUrl: '/',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    knockback: '../bower_components/knockback/knockback',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/underscore/underscore',
    knockout: '../bower_components/knockout/dist/knockout'
  },
  packages: [

  ]
});

// This has to be separate from the above to keep bower-requirejs from trying to parse it (and getting an undefined chrome)
// It correctly sets the base path from which to load scripts using the unique chrome extension id
require.config({
  baseUrl: chrome.extension.getURL('/scripts/')
});
