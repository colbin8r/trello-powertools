'use strict';

define ['config/app', 'backbone', 'backbone-relational'], (config, Backbone) ->
  class Board extends Backbone.RelationalModel
    urlRoot: config.api.baseUrl + 'boards/'
    title: ''
    description: ''
    members: ''
    labels: ''
    due_date: ''
    subscribed: ''
