'use strict';

define ['backbone', 'models/board'], (Backbone, Board) ->
  class Boards extends Backbone.Collection
    model: Board
    url: ''
