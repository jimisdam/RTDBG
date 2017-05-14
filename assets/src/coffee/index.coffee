ipcRenderer   = require('electron').ipcRenderer

$ ->
  $("#create-new-app").click ->
    ipcRenderer.send 'show-new-app-window'
    return
  return
