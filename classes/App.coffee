fs = require 'fs'

class App
  appID     = null
  appKey    = null
  secret    = null
  handle    = null
  uid       = null
  isSecure  = true

  constructor: (data) ->
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
