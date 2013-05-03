define(['onion/type'], function (Type) {

  return Type.sub('View')

    .proto({
      insertChild: function (child) {
        child.attachToScene(this.scene)
      },

      attachToScene: function (scene) {
        this.scene = scene
      },

      destroy: function () {
      }
    })

})
