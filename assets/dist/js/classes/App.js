var App, config, fs;

fs = require('fs');

config = require('config');

App = (function() {
  function App(data) {
    this.uid = null;
    this.appID = null;
    this.appKey = null;
    this.secret = null;
    this.handle = null;
    this.uid = null;
    this.isSecure = null;
    this.channels = [];
    if (data) {
      this.appID = data.appID;
      this.appKey = data.appKey;
      this.secret = data.secret;
      this.handle = data.handle;
      this.uid = data.uid;
      this.isSecure = data.isSecure;
      this.channels = data.channels;
    }
    return this;
  }

  App.prototype.save = function() {
    var obj_str;
    obj_str = JSON.stringify(this);
    fs.writeFileSync('./data/apps/' + this.uid + '.json', obj_str, 'utf8', function(err) {
      if (err) {
        return console.log(err);
      }
    });
    return this;
  };

  App.prototype.load = function() {
    var obj, obj_str;
    if (fs.existsSync('./data/apps/' + this.uid + '.json')) {
      obj_str = fs.readFileSync('./data/apps/' + this.uid + '.json');
      obj = JSON.parse(obj_str);
      return new App(obj);
    }
  };

  App.prototype.remove = function() {
    if (fs.existsSync('./data/apps/' + this.uid + '.json')) {
      fs.unlink('./data/apps/' + this.uid + '.json');
    }
  };

  App.all = function() {
    var apps, file, files, i, len, obj, obj_str;
    apps = [];
    files = fs.readdirSync('./data/apps/');
    for (i = 0, len = files.length; i < len; i++) {
      file = files[i];
      obj_str = fs.readFileSync('./data/apps/' + file);
      obj = JSON.parse(obj_str);
      apps.push(new App(obj));
    }
    return apps;
  };

  return App;

})();

module.exports = App;
