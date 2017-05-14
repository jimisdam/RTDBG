ipcRenderer   = require('electron').ipcRenderer

$ ->
  $("#create-new-app").click ->
    ipcRenderer.send 'show-new-app-window'
    return
  $("#open-preferences").click ->
    ipcRenderer.send 'show-preferences-window'
    return
  return
