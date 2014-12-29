(function() {
  'use strict';
  requirejs(['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'config/settings', 'collections/boards', 'models/member'], function($, kb, Backbone, ko, App, config, settings, Boards, Member) {
    var app;
    app = new App();
    app.authorize(app.bootstrap);
    return console.log('here');
  });

}).call(this);
