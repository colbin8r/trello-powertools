(function() {
  'use strict';
  requirejs(['jquery'], function($) {
    console.log('\'Allo \'Allo! Content script!');
    console.log($);
    return console.log(window);
  });

}).call(this);
