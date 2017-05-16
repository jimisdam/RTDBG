ipcRenderer   = require('electron').ipcRenderer
App           = require './assets/dist/js/classes/App.js'
AppMenu       = require './assets/dist/js/classes/AppMenu.js'

$ ->
  $("#cancel-remove-app").click ->
    ipcRenderer.send 'hide-remove-app-window'
    return
  $("#remove-app").click ->
    for app in App.all()
      app.remove() if $("#remove-app-select").val() is app.uid
    ipcRenderer.send 'hide-remove-app-window'
    return
  $.each App.all(), (key, value) ->
    $('#remove-app-select')
      .append $('<option/>', {value: value.uid, text: value.handle})
    return
  return
