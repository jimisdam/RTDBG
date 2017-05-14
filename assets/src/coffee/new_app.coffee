ipcRenderer   = require('electron').ipcRenderer
App           = require './assets/dist/js/classes/App.js'
sanitize      = require './assets/dist/js/helpers/Sanitize.js'

$ ->
  $("#cancel-new-app").click ->
    ipcRenderer.send 'hide-new-app-window'
    return
  $("#save-new-app").click ->
    save_app()
    #ipcRenderer.send 'hide-new-app-window'
    return
  return

@save_app = () ->
  data = {}

  data.appID = $("input[name='new-app-appid']").val()
  data.appKey = $("input[name='new-app-appkey']").val()
  data.secret = $("input[name='new-app-secret']").val()
  data.handle = $("input[name='new-app-handle']").val()
  data.isSecure = $("input[name='new-app-issecure']").val()
  data.uid = sanitize(data.handle)

  app = new App(data)
  console.log(JSON.stringify(app))
