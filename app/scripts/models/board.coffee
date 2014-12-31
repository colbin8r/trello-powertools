'use strict';

define ['config/app', 'backbone', 'models/card', 'collections/cards', 'backbone-relational'], (config, Backbone, Card, CardCollection) ->
  class Board extends Backbone.RelationalModel
    relations: [
      type: Backbone.HasMany
      key: 'cards'
      relatedModel: Card
      collectionType: CardCollection
      includeInJSON: no
      autoFetch: yes
      reverseRelation:
        key: 'board'
    ]
    urlRoot: config.api.baseUrl + 'boards/'
    title: ''
    description: ''
    members: ''
    labels: ''
    due_date: ''
    subscribed: ''
