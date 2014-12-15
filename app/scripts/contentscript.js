(function() {
  'use strict';
  requirejs(['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'collections/boards'], function($, kb, Backbone, ko, App, config, Boards) {
    var app;
    app = new App();
    return config.load((function(_this) {
      return function() {
        return app.bootstrap();
      };
    })(this));
  });

}).call(this);
