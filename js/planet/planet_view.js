define(['view'], function (View) {

  var sphere = function (pos, radius, colour) {
    if (!radius) radius = 50
    var sphere = new THREE.Mesh(
      new THREE.SphereGeometry(radius, 16, 16),
      new THREE.MeshLambertMaterial({color: colour})
    )
    sphere.position.x = pos[0]
    sphere.position.y = pos[1]
    sphere.position.z = pos[2]
    return sphere
  }

  return View.sub('PlanetView')

    .proto({
      render: function (models) {
        this.sphere = sphere(models.planet.position(), models.planet.radius())
        var self = this
        setTimeout(function () { // TODO: fix this!!!!!!!!
          self.scene.add(self.sphere)
        })
      },
      
      updatePosition: function (position) {
        this.sphere.position.x = position[0]
        this.sphere.position.y = position[1]
        this.sphere.position.z = position[2]
      }
    })

})
