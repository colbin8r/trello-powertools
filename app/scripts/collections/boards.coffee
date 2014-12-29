'use strict';

define ['config/app', 'backbone', 'models/board'], (config, Backbone, Board) ->
  class BoardsCollection extends Backbone.Collection
    model: Board
    url: -> 
      if @parentMember?
        return @parentMember.url() + '/boards/'
      else
        return config.api.baseUrl + 'members/me/boards/'
