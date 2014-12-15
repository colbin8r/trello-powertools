'use strict';

define ['config/defaults'], (defaults) ->

  class Options
    # merges configuration values from defaults.coffee and chrome storage (options page)
    load: (callback) ->
      chrome.storage.sync.get 'options', (options) =>
        if _.isEmpty options then console.warn 'no options found in chrome storage'
        @options = _.extend defaults, options
        console.log @options
        callback()

    save: ->
      chrome.storage.sync.save 'options', @options
    get: (key) ->
      @options[key]
    set: (key, value) ->
      @options[key] = value

  new Options()

  # chrome.storage.sync.get 'options', (items) =>
  #   @options = items
  #   console.log @options

  # get: (key) ->
  #   @options[key]
  # set: (key, value, callback) ->
  #   @options[key] = value

  # get: (key, callback) ->
  #   chrome.storage.sync.get key, callback
  # set: (key, value, callback) ->
  #   chrome.storage.sync.set {key: value}, callback
  
