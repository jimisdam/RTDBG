var ipcRenderer;

ipcRenderer = require('electron').ipcRenderer;

$(function() {
  return $("#close-preferences").click(function() {
    ipcRenderer.send('hide-preferences-window');
  });
});
