(function () {
  window.setup = function (onSetup, onDraw) {
    var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 )
    var scene = new THREE.Scene()
    var renderer = new THREE.WebGLRenderer()

    renderer.setSize( window.innerWidth, window.innerHeight )
    document.body.appendChild( renderer.domElement )

    function animate() {
      requestAnimationFrame( animate )
      onDraw(scene, camera)
      renderer.render( scene, camera )
    }

    // For the console
    window.camera = camera
    window.scene = scene

    onSetup(scene, camera)
    animate()
  }
})()
