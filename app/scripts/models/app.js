(function() {
  'use strict';
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'config/app', 'config/settings'], function($, config, settings) {
    var App;
    return App = (function() {
      function App() {
        this.receiveToken = __bind(this.receiveToken, this);
        this.validToken = __bind(this.validToken, this);
      }

      App.authorized = false;

      App.prototype.bootstrap = function() {
        console.info('bootstrapping...');
        return this.authorize();
      };

      App.prototype.authorize = function() {
        console.info('checking for authorization...');
        return this.checkToken(this.validToken);
      };

      App.prototype.checkToken = function(callback) {
        return chrome.storage.sync.get('token', callback);
      };

      App.prototype.validToken = function(data) {
        var token;
        token = data.token;
        if (token != null) {
          console.info('authorization found.');
          this.authorized = true;
          return this.token = token;
        } else {
          console.warn('no authorization found');
          return this.requestToken();
        }
      };

      App.prototype.requestToken = function() {
        var height, left, top, width;
        console.info('requesting auth token...');
        width = 420;
        height = 620;
        left = window.screenX + (window.innerWidth - width) / 2;
        top = window.screenY + (window.innerHeight - height) / 2;
        this.popup = window.open(this.authorizeUrl(), config.name, "width=" + width + ",height=" + height + ",left=" + left + ",top=" + top);
        return window.addEventListener("message", this.receiveToken, false);
      };

      App.prototype.authorizeUrl = function() {
        var origin, params, _ref;
        origin = (_ref = /^[a-z]+:\/\/[^\/]*/.exec(location)) != null ? _ref[0] : void 0;
        params = {
          name: config.name,
          key: config.api.key,
          scope: config.auth.scope,
          callback_method: config.auth.callback_method,
          expiration: config.auth.expiration,
          return_url: origin
        };
        return 'https://trello.com/1/authorize/?' + $.param(params);
      };

      App.prototype.receiveToken = function(event) {
        var token;
        if (event.origin === 'https://trello.com') {
          token = event.data;
          if (token === '') {
            return console.error('user denied authorization');
          } else {
            console.info('received auth token', token);
            return this.authorizeWithToken(token);
          }
        }
      };

      App.prototype.authorizeWithToken = function(token) {
        console.info('saving token...');
        return chrome.storage.sync.set({
          'token': token
        }, function() {
          return console.info('token saved.');
        });
      };

      return App;

    })();
  });

}).call(this);
