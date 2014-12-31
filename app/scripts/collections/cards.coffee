'use strict';

define ['config/app', 'backbone', 'models/card'], (config, Backbone, Card) ->
  class CardsCollection extends Backbone.Collection
    model: Card
    url: -> 
      if @board?
        return @board.url() + '/cards/'
      else
        return config.api.baseUrl + 'members/me/boards/'
