import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import Experience from "./Experience";

export default class Camera {
    constructor() {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.setInstance()
        this.setOrbitControls()
    }

    // Create perspective camera instance
    setInstance() {
        this.instance = new THREE.PerspectiveCamera(
            35, 
            this.sizes.width / this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(6, 4, 8)
        this.scene.add(this.instance)
    }

    // Create Orbit Controls
    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas)
        this.controls.enableDamping = true
    }

    // Handle viewport resize
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height
        this.instance.updateProjectionMatrix()
    }

    // Handle update of Orbit Controls on each frame
    update() {
        this.controls.update()
    }
}