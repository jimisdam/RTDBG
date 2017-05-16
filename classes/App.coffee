fs = require 'fs'
config = require 'config'

class App

  constructor: (data) ->
    @uid    = null
    @appID  = null
    @appKey = null
    @secret = null
    @handle = null
    @uid    = null
    @isSecure = null
    @channels = []

    if data
      @appID = data.appID
      @appKey = data.appKey
      @secret = data.secret
      @handle = data.handle
      @uid = data.uid
      @isSecure = data.isSecure
      @channels = data.channels
    return @

  save: () ->
    obj_str = JSON.stringify @
    fs.writeFileSync './data/apps/' + @uid + '.json', obj_str, 'utf8', (err) ->
      if err
        return console.log(err)
    return @

  load: () ->
    if fs.existsSync './data/apps/' + @uid + '.json'
      obj_str = fs.readFileSync './data/apps/' + @uid + '.json'
      obj = JSON.parse obj_str
      return new App(obj)

  remove: () ->
    if fs.existsSync './data/apps/' + @uid + '.json'
      fs.unlink './data/apps/' + @uid + '.json'
    return

  @all: () ->
    apps = []
    files = fs.readdirSync './data/apps/'
    for file in files
      obj_str = fs.readFileSync './data/apps/' + file
      obj = JSON.parse obj_str
      apps.push(new App(obj))
    return apps

module.exports = App
