(function() {
  'use strict';
  requirejs(['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'config/settings', 'collections/boards'], function($, kb, Backbone, ko, App, config, settings, Boards) {
    var app;
    app = new App();
    return app.bootstrap();
  });

}).call(this);
