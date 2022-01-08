import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)

const group = new THREE.Group()
scene.add(group)
group.position.set(0,0.05,0)
group.scale.y = 2
group.rotation.y = 0.6

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
group.add(cube2)
cube2.position.set(-1.5,0,0)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
group.add(cube3)
cube3.position.set(1.5,0,0)

// Positioning Objects
// mesh.position.set(0,0,0)

// Scaling Objects
// mesh.scale.set(2,1,1)

// Rotating Objects
// mesh.rotation.reorder('YXZ')
// mesh.rotation.set(0.3,Math.PI,0.5)


// Axes Helper
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)
// camera.lookAt(mesh.position,1,1)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)