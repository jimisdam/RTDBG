var App, fs;

fs = require('fs');

App = (function() {
  var appID, appKey, isSecure, secret;

  appID = null;

  appKey = null;

  secret = null;

  isSecure = true;

  function App(data) {
    this.data = data;
  }

  App.prototype.save = function() {};

  return App;

})();

module.exports = App;
