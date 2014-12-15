(function() {
  'use strict';
  define({
    get: function(key) {
      return chrome.storage.sync.get(key);
    },
    set: function(key, value) {
      return chrome.storage.sync.set({
        key: value
      });
    }
  });

}).call(this);
