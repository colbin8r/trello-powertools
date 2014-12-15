(function() {
  'use strict';
  define(['underscore', 'config/app'], function(_, config) {
    var Settings;
    Settings = (function() {
      function Settings() {}

      Settings.prototype.get = function(key, callback) {
        return chrome.storage.sync.get(key, callback);
      };

      Settings.prototype.set = function(key, value) {
        return chrome.storage.sync.set({
          key: value
        });
      };

      return Settings;

    })();
    return new Settings;
  });

}).call(this);
