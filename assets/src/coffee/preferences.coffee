ipcRenderer   = require('electron').ipcRenderer

$ ->
  $("#close-preferences").click ->
    ipcRenderer.send 'hide-preferences-window'
    return
