(function() {
  'use strict';
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['config/app', 'backbone', 'backbone-relational'], function(config, Backbone) {
    var Card;
    return Card = (function(_super) {
      __extends(Card, _super);

      function Card() {
        return Card.__super__.constructor.apply(this, arguments);
      }

      Card.prototype.urlRoot = config.api.baseUrl + 'cards/';

      return Card;

    })(Backbone.RelationalModel);
  });

}).call(this);
