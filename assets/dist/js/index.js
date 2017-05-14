var ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

$(function() {
  $("#create-new-app").click(function() {
    ipcRenderer.send('show-new-app-window');
  });
});
