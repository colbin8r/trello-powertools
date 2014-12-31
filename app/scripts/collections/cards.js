(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['config/app', 'backbone', 'models/card'], function(config, Backbone, Card) {
    var CardsCollection;
    return CardsCollection = (function(_super) {
      __extends(CardsCollection, _super);

      function CardsCollection() {
        return CardsCollection.__super__.constructor.apply(this, arguments);
      }

      CardsCollection.prototype.model = Card;

      CardsCollection.prototype.url = function() {
        if (this.board != null) {
          return this.board.url() + '/cards/';
        } else {
          return config.api.baseUrl + 'members/me/boards/';
        }
      };

      return CardsCollection;

    })(Backbone.Collection);
  });

}).call(this);
