'use strict';

# chrome.tabs.executeScript 'https://api.trello.com/1/client.js?key=78def5ee769d4a4aef7fc097d25025fe'

# jQuery.noConflict()

requirejs ['jquery'], ($) -> 
  console.log('\'Allo \'Allo! Content script!')
  console.log $ 
  console.log window
