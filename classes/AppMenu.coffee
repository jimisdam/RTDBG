class AppMenu

  @populate: () ->
    apps = App.all()
    for app in apps
      @add app

  @add: (app) ->
    template = $('#app-template').html()
    template = template.replace('{app-uid}', app.uid)
    template = template.replace('{app-name}', app.handle)
    $("nav[id='apps']").append(template)

  @clear: () ->
    $("nav[id='apps']").html('')

module.exports = AppMenu
