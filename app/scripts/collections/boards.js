(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['config/app', 'backbone', 'models/board'], function(config, Backbone, Board) {
    var BoardsCollection;
    return BoardsCollection = (function(_super) {
      __extends(BoardsCollection, _super);

      function BoardsCollection() {
        return BoardsCollection.__super__.constructor.apply(this, arguments);
      }

      BoardsCollection.prototype.model = Board;

      BoardsCollection.prototype.url = function() {
        if (this.parentMember != null) {
          return this.parentMember.url() + '/boards/';
        } else {
          return config.api.baseUrl + 'members/me/boards/';
        }
      };

      return BoardsCollection;

    })(Backbone.Collection);
  });

}).call(this);
