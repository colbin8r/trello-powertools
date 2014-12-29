(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['config/app', 'backbone', 'backbone-relational'], function(config, Backbone) {
    var Board;
    return Board = (function(_super) {
      __extends(Board, _super);

      function Board() {
        return Board.__super__.constructor.apply(this, arguments);
      }

      Board.prototype.urlRoot = config.api.baseUrl + 'boards/';

      Board.prototype.title = '';

      Board.prototype.description = '';

      Board.prototype.members = '';

      Board.prototype.labels = '';

      Board.prototype.due_date = '';

      Board.prototype.subscribed = '';

      return Board;

    })(Backbone.RelationalModel);
  });

}).call(this);
