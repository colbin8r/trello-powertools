'use strict';

define
  get: (key) ->
    chrome.storage.sync.get key
  set: (key, value) ->
    chrome.storage.sync.set {key: value}
