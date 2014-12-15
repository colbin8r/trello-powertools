(function() {
  'use strict';
  define(['config/defaults'], function(defaults) {
    var Options;
    Options = (function() {
      function Options() {}

      Options.prototype.load = function(callback) {
        return chrome.storage.sync.get('options', (function(_this) {
          return function(options) {
            if (_.isEmpty(options)) {
              console.warn('no options found in chrome storage');
            }
            _this.options = _.extend(defaults, options);
            console.log(_this.options);
            return callback();
          };
        })(this));
      };

      Options.prototype.save = function() {
        return chrome.storage.sync.save('options', this.options);
      };

      Options.prototype.get = function(key) {
        return this.options[key];
      };

      Options.prototype.set = function(key, value) {
        return this.options[key] = value;
      };

      return Options;

    })();
    return new Options();
  });

}).call(this);
