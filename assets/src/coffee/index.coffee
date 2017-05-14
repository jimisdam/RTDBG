ipcRenderer   = require('electron').ipcRenderer
App           = require './assets/dist/js/classes/App.js'
AppMenu       = require './assets/dist/js/classes/AppMenu.js'

$ ->
  AppMenu.populate()
  $("#create-new-app").click ->
    ipcRenderer.send 'show-new-app-window'
    return
  $("#open-preferences").click ->
    ipcRenderer.send 'show-preferences-window'
    return
  return
