define(['onion/type'], function (Type) {

  var planets = {}

  return Type.sub('Planet')

    .proto({
      init: function (name, mass, position, velocity) {
        this.name = name
        this.mass = mass || 100
        this.position = position || [0,0,0]
        this.velocity = velocity || [0,0,0]

        this.radius = Math.sqrt(mass)
      }
    })

    .extend({
      create: function (name, m, p, v) {
        var planet = new this(name, m, p, v)
        planets[name] = planet
        return planet
      },

      get: function (name) {
        return planets[name]
      }

    })
})
