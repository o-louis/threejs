// INIT
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  95,
  window.innerWidth / window.innerHeight,
  1,
  500
);
camera.position.set(0, 0, 40);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube

const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [];
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));

const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(geometry, material);
scene.add(line);

renderer.render(scene, camera);
// camera.position.z = 5;
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// }
// animate();
