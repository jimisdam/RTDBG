var App, fs;

fs = require('fs');

App = (function() {
  function App(data) {
    if (data) {
      this.appID = data.appID;
      this.appKey = data.appKey;
      this.secret = data.secret;
      this.handle = data.handle;
      this.uid = data.uid;
      this.isSecure = data.isSecure;
    }
    return this;
  }

  App.prototype.save = function() {};

  return App;

})();

module.exports = App;
