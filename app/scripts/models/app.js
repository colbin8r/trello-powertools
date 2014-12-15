(function() {
  'use strict';
  define(['jquery', 'config/app'], function($, config) {
    var App;
    return App = (function() {
      function App() {}

      App.prototype.bootstrap = function() {
        return console.info('bootstrapping...');
      };

      App.prototype.authorize = function() {};

      return App;

    })();
  });

}).call(this);
