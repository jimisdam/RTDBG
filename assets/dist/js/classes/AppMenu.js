var AppMenu;

AppMenu = (function() {
  function AppMenu() {}

  AppMenu.populate = function() {
    var app, apps, i, len, results;
    apps = App.all();
    results = [];
    for (i = 0, len = apps.length; i < len; i++) {
      app = apps[i];
      results.push(this.add(app));
    }
    return results;
  };

  AppMenu.add = function(app) {
    var template;
    template = $('#app-template').html();
    console.log(template);
    template = template.replace('{app-uid}', app.uid);
    template = template.replace('{app-name}', app.handle);
    return $("nav[id='apps']").append(template);
  };

  return AppMenu;

})();

module.exports = AppMenu;
