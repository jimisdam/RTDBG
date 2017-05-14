var App, fs;

fs = require('fs');

App = (function() {
  var appID, appKey, handle, isSecure, secret, uid;

  appID = null;

  appKey = null;

  secret = null;

  handle = null;

  uid = null;

  isSecure = true;

  function App(data) {
    this.appID = data.appID;
    this.appKey = data.appKey;
    this.secret = data.secret;
    this.handle = data.handle;
    this.uid = data.uid;
    this.isSecure = data.isSecure;
    return this;
  }

  App.prototype.save = function() {};

  return App;

})();

module.exports = App;
