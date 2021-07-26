var module = {
  scene: null, camera: null, renderer: null,
  container: null, controls: null,
  clock: null, stats: null,

  init: function() {

    // Create main scene
    this.scene = new THREE.Scene();
    //this.scene.fog = new THREE.FogExp2(0xc8e0ff, 0.0003);

    var SCREEN_WIDTH = 500 //window.innerWidth, 
    var SCREEN_HEIGHT = 500 //window.innerHeight;

    // Prepare perspective camera
    var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 1, FAR = 1000;
    this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    this.scene.add(this.camera);
    this.camera.position.set(0, 50, 100);
    this.camera.lookAt(new THREE.Vector3(0,30,0));

    // Prepare webgl renderer
    this.renderer = new THREE.WebGLRenderer({ antialias:false, alpha: true });
    this.renderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
    this.renderer.setClearColor( 0x000000, 0);

    // Prepare container
    this.container = document.getElementById("viewport");
    this.container.appendChild(this.renderer.domElement);

    // Events
    //THREEx.WindowResize(this.renderer, this.camera);

    // Prepare Orbit controls
    this.controls = new THREE.OrbitControls(this.camera);
    this.controls.target = new THREE.Vector3(0, 30, 0);
    this.controls.update()
    this.controls.minDistance = 120;
    this.controls.maxDistance = 120;
    this.controls.enablePan = false;
    this.controls.autoRotate = true;

    // Prepare clock
    this.clock = new THREE.Clock();

    // Add lights
    this.scene.add( new THREE.AmbientLight(0xffffff));
    //this.scene.add( new THREE.HemisphereLight( 0xffffbb, 0x080820, 1 ) );

    // Load model
    this.loadDaeModel();

    // load ground
    /*
    var geo = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
    var mat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    var plane = new THREE.Mesh(geo, mat);
    plane.rotation.set(90 * Math.PI / 180, 0, 20 * Math.PI / 180);
    this.scene.add(plane);
    */
  },
  loadDaeModel: function() {

    // Prepare ColladaLoader
    var daeLoader = new THREE.ColladaLoader();
    daeLoader.options.convertUpAxis = true;
    daeLoader.load('models/ironman2.dae', function(collada) {

      var modelMesh = collada.scene;

      // Prepare and play animation
      modelMesh.traverse( function (child) {
        if (child instanceof THREE.SkinnedMesh) {
          var animation = new THREE.Animation(child, child.geometry.animation);
          animation.play();
        }
      } );

      // Set position and scale
      var scale = 45;
      modelMesh.scale.set(scale, scale, scale);
      modelMesh.rotation.set(90 * Math.PI / 180, 0, 20 * Math.PI / 180);
      modelMesh.position.set(0, -10, 0);

      // Add the mesh into scene
      module.scene.add(modelMesh);
    });

  }
};

// Animate the scene
function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}

// Update controls and stats
function update() {
  var delta = module.clock.getDelta();

  if (module.controls != null) {
   module.controls.update(delta);
  }

  THREE.AnimationHandler.update(delta);
}

// Render the scene
function render() {
  if (module.renderer) {
    module.renderer.render(module.scene, module.camera);
  }
}

// Initialize lesson on page load
function initializeLesson() {
  module.init();
  animate();
}

if (window.addEventListener)
  window.addEventListener('load', initializeLesson, false);
else if (window.attachEvent)
  window.attachEvent('onload', initializeLesson);
else window.onload = initializeLesson;

