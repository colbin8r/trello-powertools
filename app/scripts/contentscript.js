(function() {
  'use strict';
  requirejs(['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'config/settings', 'collections/boards', 'models/member'], function($, kb, Backbone, ko, App, config, settings, Boards, Member) {
    var app;
    app = new App();
    app.authorize(app.bootstrap);
    return app.on('ready', (function(_this) {
      return function(app) {
        console.log('here');
        return console.log(app);
      };
    })(this));
  });

}).call(this);
