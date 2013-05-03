define([
  'onion/controller',
  'onion/collection',
  'onion/collection_controller',
  './app_view',
  'lib/planet',
  'planet/planet_controller'
  ], function (Controller, Collection, collectionController, AppView, Planet, PlanetController) {

  return Controller.sub('AppController')

    .use(collectionController, 'planets', 'planet', PlanetController)

    .view(AppView)

    .after('init', function () {
      this.newModel('planets', new Collection())
      this.view.render()
      this.planets.add(new Planet({name: 'sun', mass: 1000}))
    })

})
