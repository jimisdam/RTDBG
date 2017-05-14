var App, AppMenu, ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

App = require('./assets/dist/js/classes/App.js');

AppMenu = require('./assets/dist/js/classes/AppMenu.js');

$(function() {
  AppMenu.populate();
  $("#create-new-app").click(function() {
    ipcRenderer.send('show-new-app-window');
  });
  $("#open-preferences").click(function() {
    ipcRenderer.send('show-preferences-window');
  });
});
