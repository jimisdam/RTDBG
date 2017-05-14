ipcRenderer   = require('electron').ipcRenderer
App           = require './assets/dist/js/classes/App.js'

$ ->
  $("#cancel-new-app").click ->
    ipcRenderer.send 'hide-new-app-window'
    return
  $("#save-new-app").click ->
    save_app()
    ipcRenderer.send 'hide-new-app-window'
    return
  return

@save_app = () ->
  app = new App()
  appID = $("input[name='']").val()
