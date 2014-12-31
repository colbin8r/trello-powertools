'use strict';

define ['config/app', 'backbone', 'backbone-relational'], (config, Backbone) ->
  class Card extends Backbone.RelationalModel
    urlRoot: config.api.baseUrl + 'cards/'
