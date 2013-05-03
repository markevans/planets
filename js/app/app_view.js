define(['view'], function (View) {

  return View.sub('AppView')

    .after('init', function () {
      this.scene = new THREE.Scene()
    })

    .proto({
      render: function () {
        var renderer = new THREE.WebGLRenderer()
        renderer.setSize( window.innerWidth, window.innerHeight )
        document.body.appendChild( renderer.domElement )

        var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 10000 )

        var self = this
        function animate() {
          requestAnimationFrame( animate )
          // Do stuff
          // ...
          renderer.render( self.scene, camera )
        }

        camera.position.z = 2000
        this.scene.add(new THREE.AxisHelper(10000))
        this.scene.add(new THREE.HemisphereLight( 0xffffff, 0x777777, 1 ))

        animate()
      }
    })

})
