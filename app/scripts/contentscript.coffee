'use strict';

requirejs ['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'config/settings', 'collections/boards'], ($, kb, Backbone, ko, App, config, settings, Boards) ->

  app = new App()
  app.bootstrap()
  # config.load => app.bootstrap()
  # app.authorize()
