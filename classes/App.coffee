fs = require 'fs'

class App

  constructor: (data) ->
    if data
      @appID = data.appID
      @appKey = data.appKey
      @secret = data.secret
      @handle = data.handle
      @uid = data.uid
      @isSecure = data.isSecure
    return @


  save: () ->

    return

module.exports = App
