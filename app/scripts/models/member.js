(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['config/app', 'backbone', 'models/board', 'collections/boards', 'backbone-relational'], function(config, Backbone, Board, BoardsCollection) {
    var Member;
    return Member = (function(_super) {
      __extends(Member, _super);

      function Member() {
        return Member.__super__.constructor.apply(this, arguments);
      }

      Member.prototype.urlRoot = config.api.baseUrl + 'members/';

      Member.prototype.relations = [
        {
          type: Backbone.HasMany,
          key: 'boards',
          relatedModel: Board,
          collectionType: BoardsCollection,
          includeInJSON: Backbone.Model.prototype.idAttribute,
          keySource: 'idBoards',
          autoFetch: true,
          reverseRelation: {
            key: 'parentMember'
          }
        }
      ];

      return Member;

    })(Backbone.RelationalModel);
  });

}).call(this);
