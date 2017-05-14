sanitize = (str) ->
  str = str.trim()
  str = str.replace(/\s+/g, '-').toLowerCase()


module.exports = sanitize
