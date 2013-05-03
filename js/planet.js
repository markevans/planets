var Planet = (function () {
  function Planet (mass, position, velocity) {
    this.mass = mass || 100
    this.position = position || [0,0,0]
    this.velocity = velocity || [0,0,0]

    this.radius = Math.sqrt(mass)
  }

  return Planet
})()
