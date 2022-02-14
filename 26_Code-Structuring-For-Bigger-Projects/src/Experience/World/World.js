import * as THREE from 'three'
import Experience from "../Experience";
import Environment from './Environment';


export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Test Mesh        
        const testMesh = new THREE.Mesh(
            new THREE.BoxGeometry,
            new THREE.MeshStandardMaterial()
        )
        this.scene.add(testMesh)

        this.resources.on('ready', () => {
            // Environment
            this.environment = new Environment()            
        })
    }
}