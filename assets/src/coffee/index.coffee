ipcRenderer   = require('electron').ipcRenderer
chokidar      = require 'chokidar'
App           = require './assets/dist/js/classes/App.js'
AppMenu       = require './assets/dist/js/classes/AppMenu.js'

$ ->
  AppMenu.populate()
  $("#create-new-app").click ->
    ipcRenderer.send 'show-new-app-window'
    return
  $("#open-remove-app").click ->
    ipcRenderer.send 'show-remove-app-window'
    return
  $("#open-preferences").click ->
    ipcRenderer.send 'show-preferences-window'
    return
  return

# Watch for new files and update the UI
chokidar.watch('./data/apps/*.json',
  cwd: __dirname
).on 'all', (event, path) ->
  console.log event, path
  AppMenu.clear()
  AppMenu.populate()
  return
