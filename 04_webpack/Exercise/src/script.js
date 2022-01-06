// Import Dependencies:
import './style.css';
import * as THREE from 'three';

// Initialize Scene:
const scene = new THREE.Scene();

// Create Red Cube:
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Initialize Camera:
const aspectRatioParams = {
    width: 800,
    height: 600
};
const camera = new THREE.PerspectiveCamera(75,aspectRatioParams.width / aspectRatioParams.height);
camera.position.z = 3;
scene.add(camera);

// Create Renderer:
const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});
renderer.setSize(aspectRatioParams.width, aspectRatioParams.height);
renderer.render(scene, camera);
