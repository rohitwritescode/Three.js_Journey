import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import EventEmitter from "./EventEmitter"

export default class Resources extends EventEmitter {
    constructor(sources) {
        super()

        // Options
        this.sources = sources
        
        // Setup
        this.items = {}
        this.noOfItemsToLoad = this.sources.length
        this.noOfItemsLoaded = 0

        this.setLoaders()
        this.startLoading()
    }

    setLoaders() {
        this.loaders = {}
        this.loaders.gltfLoader = new GLTFLoader()
        this.loaders.textureLoader = new THREE.TextureLoader()
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }

    startLoading() {
        // Load each source
        this.sources.map(source => {
            if(source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            } else if(source.type === 'texture') {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            } else if(source.type === 'cubeTexture') {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file)
                    }
                )
            } 
        })
    }

    sourceLoaded(source, file) {
        this.items[source.name] = file
        this.noOfItemsLoaded++

        if(this.noOfItemsLoaded === this.noOfItemsToLoad) {
            this.trigger('ready')
        }
    }
}