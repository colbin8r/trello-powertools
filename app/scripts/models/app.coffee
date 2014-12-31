'use strict';

define ['jquery', 'config/app', 'config/settings', 'moment', 'models/member'], ($, config, settings, moment, Member) ->
  class App extends Backbone.Model

    @authorized: no

    bootstrap: ->
      console.info 'bootstrapping...'
      # this sends the API auth token and app key with every request
      $.ajaxSetup
        data:
          key: config.api.key
          token: @token
      @user = new Member()
      @user.set id: 'me'
      @user.fetch().then => @user.get('boards').fetch().then =>
        @selectCurrentBoard()
        @trigger 'ready', @

    authorize: (successCallback) ->
      console.info 'checking for authorization...'
      @authDuration = moment.duration hours: 1
      @authSuccessCallback = successCallback
      @checkToken @validToken

    checkToken: (callback) ->
      chrome.storage.sync.get ['token', 'token_expiration'], callback

    validToken: (data) =>
      token = data.token
      expires = moment data.token_expiration
      if token?
        if not expires? or not expires.isValid() or expires.isBefore moment()
          console.warn 'authorization expired'
          @requestToken()
        else
          console.info 'authorization found.'
          @authorized = yes
          @token = token
          @authSuccessCallback() if @authSuccessCallback?
      else
        console.warn 'no authorization found'
        @requestToken()

    requestToken: ->
      console.info 'requesting auth token...'
      # open a popup requesting API access
      width = 420
      height = 620
      left = window.screenX + (window.innerWidth - width) / 2
      top = window.screenY + (window.innerHeight - height) / 2
      @popup = window.open @authorizeUrl(), config.name, "width=#{ width },height=#{ height },left=#{ left },top=#{ top }"
      # this catches the token when it is sent back to us
      window.addEventListener("message", @receiveToken, false);

    authorizeUrl: ->
      origin = ///^ [a-z]+ :// [^/]* ///.exec(location)?[0]
      params =
        name: config.name
        key: config.api.key
        scope: config.auth.scope
        callback_method: config.auth.callback_method
        expiration: config.auth.expiration
        return_url: origin
      return 'https://trello.com/1/authorize/?' + $.param(params)

    # this method needs to be scoped!
    receiveToken: (event) =>
      # if we got an auth token from Trello
      if event.origin is 'https://trello.com'
        token = event.data
        if token is ''
          console.error 'user denied authorization'
        else
          console.info 'received auth token', token
          @authorizeWithToken token

    authorizeWithToken: (token) ->
      console.info 'saving token...'
      chrome.storage.sync.set 'token': token, 'token_expiration': moment().add(@authDuration).format(), -> console.info 'token saved.'

    selectCurrentBoard: ->
      @board = @user.get('boards').findWhere url: document.location.href
      @board
