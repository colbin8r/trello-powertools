'use strict';

requirejs ['jquery', 'knockback', 'backbone', 'knockout', 'models/app', 'config/app', 'config/settings', 'collections/boards', 'models/member'], ($, kb, Backbone, ko, App, config, settings, Boards, Member) ->

  app = new App()
  # passing the bootstrap as a callback to authorize() allows us to ensure that we always have authentication and can get data
  app.authorize app.bootstrap

  console.log 'here'
