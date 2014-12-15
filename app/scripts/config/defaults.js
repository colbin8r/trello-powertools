(function() {
  'use strict';
  define({
    name: 'Trello PowerTools',
    api: {
      key: '78def5ee769d4a4aef7fc097d25025fe',
      secret: 'f603860f76038de307ce2a69d4730baaf00fc43eac5fb2f4efa13b5b52610af2',
      baseUrl: 'https://api.trello.com/1/'
    },
    auth: {
      callback_method: 'postMessage',
      scope: 'read,write',
      expiration: '1hour'
    }
  });

}).call(this);
