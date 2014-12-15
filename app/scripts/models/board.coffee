'use strict';

define ['backbone'], (Backbone) ->
  class Board extends Backbone.Model
    title: ''
    description: ''
    members: ''
    labels: ''
    due_date: ''
    subscribed: ''
