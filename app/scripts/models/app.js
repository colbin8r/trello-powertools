(function() {
  'use strict';
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery', 'config/app', 'config/settings', 'moment', 'models/member'], function($, config, settings, moment, Member) {
    var App;
    return App = (function() {
      function App() {
        this.receiveToken = __bind(this.receiveToken, this);
        this.validToken = __bind(this.validToken, this);
      }

      App.authorized = false;

      App.prototype.bootstrap = function() {
        console.info('bootstrapping...');
        $.ajaxSetup({
          data: {
            key: config.api.key,
            token: this.token
          }
        });
        this.user = new Member();
        this.user.set({
          id: 'me'
        });
        return this.user.fetch().then((function(_this) {
          return function() {
            return _this.user.get('boards').fetch().then(function() {
              return _this.selectCurrentBoard();
            });
          };
        })(this));
      };

      App.prototype.authorize = function(successCallback) {
        console.info('checking for authorization...');
        this.authDuration = moment.duration({
          hours: 1
        });
        this.authSuccessCallback = successCallback;
        return this.checkToken(this.validToken);
      };

      App.prototype.checkToken = function(callback) {
        return chrome.storage.sync.get(['token', 'token_expiration'], callback);
      };

      App.prototype.validToken = function(data) {
        var expires, token;
        token = data.token;
        expires = moment(data.token_expiration);
        if (token != null) {
          if ((expires == null) || !expires.isValid() || expires.isBefore(moment())) {
            console.warn('authorization expired');
            return this.requestToken();
          } else {
            console.info('authorization found.');
            this.authorized = true;
            this.token = token;
            if (this.authSuccessCallback != null) {
              return this.authSuccessCallback();
            }
          }
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
          'token': token,
          'token_expiration': moment().add(this.authDuration).format()
        }, function() {
          return console.info('token saved.');
        });
      };

      return App;

    })();
  });

}).call(this);
