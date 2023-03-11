import * as THREE from 'three';

export function executeThree() {

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x01000a)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({
    canvas: <HTMLElement>document.querySelector('#bg'),
});
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );
}

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setY(5);

renderer.render(scene, camera);

const torusGeometry = new THREE.TorusGeometry(12,1,12,100);
const torusMaterial = new THREE.MeshBasicMaterial({ color: 0x1f1e33, wireframe: true });
const torus = new THREE.Mesh(torusGeometry,torusMaterial);

const sphereGeometry = new THREE.SphereGeometry(4, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x1f1e33, wireframe: true });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const sphereGeometry2 = new THREE.SphereGeometry(1, 32, 16);
const sphereMaterial2 = new THREE.MeshStandardMaterial( { color: 0x1f1e33, wireframe: true});
const sphere2 = new THREE.Mesh(sphereGeometry2, sphereMaterial2);

sphere2.geometry.translate(6,0,0)

scene.add(sphere);
scene.add(sphere2);
scene.add(torus);

const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

function animate() {
    requestAnimationFrame(animate);

    torus.rotation.x += 0.004;
    torus.rotation.y += 0.007;
    torus.rotation.z += 0.004;

    sphere.rotation.y += 0.004
    sphere2.rotation.y -= 0.01

    renderer.render(scene, camera);
}
animate();
}