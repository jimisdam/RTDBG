var App, ipcRenderer, sanitize;

ipcRenderer = require('electron').ipcRenderer;

App = require('./assets/dist/js/classes/App.js');

sanitize = require('./assets/dist/js/helpers/Sanitize.js');

$(function() {
  $("#cancel-new-app").click(function() {
    ipcRenderer.send('hide-new-app-window');
  });
  $("#save-new-app").click(function() {
    save_app();
  });
});

this.save_app = function() {
  var app, data;
  data = {};
  data.appID = $("input[name='new-app-appid']").val();
  data.appKey = $("input[name='new-app-appkey']").val();
  data.secret = $("input[name='new-app-secret']").val();
  data.handle = $("input[name='new-app-handle']").val();
  data.isSecure = $("input[name='new-app-issecure']").val();
  data.uid = sanitize(data.handle);
  app = new App(data);
  app.save();
  return console.log(JSON.stringify(app));
};
