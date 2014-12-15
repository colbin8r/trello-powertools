'use strict';

define ['jquery', 'config/app'], ($, config) ->
  class App

    bootstrap: ->
      console.info 'bootstrapping...'

    authorize: ->

    # authorize: ->
    #   console.log 'authorizing...'
    #   unless @authorized()?
    #     @requestToken()

    # authorized: ->
    #   console.info 'checking for token'
    #   console.log @getToken()
    #   yes if @getToken()?

    # requestToken: ->
    #   console.log 'requesting a token...'
    #   # open a popup requesting API access
    #   width = 420
    #   height = 620
    #   left = window.screenX + (window.innerWidth - width) / 2
    #   top = window.screenY + (window.innerHeight - height) / 2
    #   @popup = window.open @authorizeUrl(), Config.name, "width=#{ width },height=#{ height },left=#{ left },top=#{ top }"
    #   # this listens for the token when it is sent
    #   window.addEventListener("message", @receiveToken, false);

    # # this method needs to be scoped!
    # receiveToken: (event) =>
    #   # if we got an auth token from Trello
    #   if event.origin is 'https://trello.com'
    #     @saveToken = event.data
    #     @popup.close()

    # authorizeUrl: ->
    #   origin = ///^ [a-z]+ :// [^/]* ///.exec(location)?[0]
    #   params =
    #     name: Config.name
    #     key: Config.api.key
    #     scope: Config.auth.scope
    #     callback_method: Config.auth.callback_method
    #     expiration: Config.auth.expiration
    #     redirect_uri: origin
    #   return 'https://trello.com/1/authorize/?' + $.param(params)

    # saveToken: (token) ->
    #   Options.set('token', token)

    # getToken: ->
    #   Options.get('token')

    # bootstrap: ->
    #   console.info 'bootstrapping...'
    #   @authorize()
