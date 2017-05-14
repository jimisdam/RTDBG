fs = require 'fs'

class App
  appID = null
  appKey = null
  secret = null
  isSecure = true

  constructor: (@data) ->


  save: () ->
    return

module.exports = App
