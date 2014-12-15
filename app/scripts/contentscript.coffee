'use strict';

requirejs ['jquery', 'knockback'], ($, kb) -> 
  console.log('\'Allo \'Allo! Content script!')
  console.log $ 
  console.log window
