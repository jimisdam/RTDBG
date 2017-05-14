var ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

$(function() {
  $("#create-new-app").click(function() {
    ipcRenderer.send('show-new-app-window');
  });
  $("#open-preferences").click(function() {
    ipcRenderer.send('show-preferences-window');
  });
});
