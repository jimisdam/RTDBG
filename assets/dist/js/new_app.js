var App, ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

App = require('./assets/dist/js/classes/App.js');

$(function() {
  $("#cancel-new-app").click(function() {
    ipcRenderer.send('hide-new-app-window');
  });
  $("#save-new-app").click(function() {
    save_app();
    ipcRenderer.send('hide-new-app-window');
  });
});

this.save_app = function() {
  var app, appID;
  app = new App();
  return appID = $("input[name='']").val();
};
