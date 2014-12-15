'use strict';

requirejs ['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'collections/boards'], ($, kb, Backbone, ko, App, config, Boards) ->

  app = new App()
  config.load => app.bootstrap()
  # app.authorize()
