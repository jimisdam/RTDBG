var App, AppMenu, chokidar, ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

chokidar = require('chokidar');

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

chokidar.watch('./data/apps/*.json', {
  cwd: __dirname
}).on('all', function(event, path) {
  console.log(event, path);
  AppMenu.clear();
  AppMenu.populate();
});
