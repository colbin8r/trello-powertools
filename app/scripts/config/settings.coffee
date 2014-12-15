'use strict';

define ['underscore', 'config/app'], (_, config) ->

  class Settings
    get: (key, callback) ->
      chrome.storage.sync.get key, callback

    set: (key, value) ->
      chrome.storage.sync.set key: value

  new Settings

  # class Options
  #   # merges configuration values from defaults.coffee and chrome storage (options page)
  #   load: (callback) ->
  #     chrome.storage.sync.get 'options', (options) =>
  #       if _.isEmpty options then console.warn 'no options found in chrome storage'
  #       @options = _.extend defaults, options
  #       @defaults = defaults
  #       @settings = options
  #       callback()

  #   save: ->
  #     chrome.storage.sync.set 'options': @options
    
  #   # options is usually the one you want--a blend of defaults and settings
  #   options: -> @options

  #   defaults: -> @defaults

  #   settings: -> @settings

  # new Options()

  # # chrome.storage.sync.get 'options', (items) =>
  # #   @options = items
  # #   console.log @options

  # # get: (key) ->
  # #   @options[key]
  # # set: (key, value, callback) ->
  # #   @options[key] = value

  # # get: (key, callback) ->
  # #   chrome.storage.sync.get key, callback
  # # set: (key, value, callback) ->
  # #   chrome.storage.sync.set {key: value}, callback
