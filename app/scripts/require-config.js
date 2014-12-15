// Monkey-patch RequireJS with a custom load method to ensure that scripts are loaded into the correct context
require.load = function (context, moduleName, url) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4 && xhr.status === 200) {
      eval(xhr.responseText);
      context.completeLoad(moduleName)
    }
  };
  xhr.send(null);
};

// Configure RequireJS with Bower components--update with "grunt bower"
require.config({
  shim: {

  },
  baseUrl: chrome.extension.getURL('/scripts/'),
  paths: {
    // jquery: '../bower_components/jquery/dist/jquery'
  },
  packages: [

  ]
});
