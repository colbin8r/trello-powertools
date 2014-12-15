(function() {
  'use strict';
  requirejs(['jquery', 'knockback'], function($, kb) {
    console.log('\'Allo \'Allo! Content script!');
    console.log($);
    return console.log(window);
  });

}).call(this);
