define(['onion/controller', './planet_view'], function (Controller, PlanetView) {

  return Controller.sub('PlanetController')

    .models('planet')

    .view(PlanetView)

    .onModel('planet', 'change:position', function () { this.view.updatePosition(this.planet.position()) })

    .after('init', function () {
      this.view.render({planet: this.planet})
    })

})
