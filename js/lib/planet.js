define(['onion/struct'], function (Struct) {

  return Struct.sub('Planet')

    .attributes('name', 'mass', 'position', 'velocity')

    .after('init', function () {
      this.setDefaults({
        mass: 100,
        position: [0,0,0],
        velocity: [0,0,0]
      })
      this.constructor.planets[this.name()] = this
    })

    .proto({
      radius: function () {
        return Math.sqrt(this.mass())
      }
    })

    .extend({

      planets: {}

    })
})
