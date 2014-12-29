'use strict';

define ['config/app', 'backbone', 'models/board', 'collections/boards', 'backbone-relational'], (config, Backbone, Board, BoardsCollection) ->  class Member extends Backbone.RelationalModel
    urlRoot: config.api.baseUrl + 'members/'
    relations: [
      type: Backbone.HasMany
      key: 'boards'
      relatedModel: Board
      collectionType: BoardsCollection
      includeInJSON: Backbone.Model.prototype.idAttribute
      keySource: 'idBoards'
      autoFetch: yes
      reverseRelation:
        key: 'parentMember'
    ]
