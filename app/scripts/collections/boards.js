(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'models/board'], function(Backbone, Board) {
    var Boards;
    return Boards = (function(_super) {
      __extends(Boards, _super);

      function Boards() {
        return Boards.__super__.constructor.apply(this, arguments);
      }

      Boards.prototype.model = Board;

      Boards.prototype.url = '';

      return Boards;

    })(Backbone.Collection);
  });

}).call(this);
