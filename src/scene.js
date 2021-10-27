import * as THREE from "three";
import gsap from "gsap";

export const InitScene = () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.domElement.classList.add("three");
  document.body.appendChild(renderer.domElement);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: "white" });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  const bottomBorder = -2;
  const topBorder = 2.5;

  cube.position.y = topBorder;

  const callAnimation = animation;

  async function animation() {
    gsap.to(cube.position, {
      y: bottomBorder / 2,
      duration: 4,
      ease: "elastic",
    }); //falling

    await gsap.to(cube.scale, { y: 3, duration: 0.3, ease: "elastic" }); //transforming y

    gsap.to(cube.position, {
      y: bottomBorder / 2,
      duration: 2,
      ease: "elastic",
    }); //falling

    await gsap.to(cube.scale, { x: 2, y: 1, duration: 0.5, ease: "elastic" }); // transforming x

    gsap.to(cube.scale, { x: 1, y: 3, duration: 0.5, ease: "elastic" }); //transforming y
    gsap.to(cube.position, { y: topBorder, duration: 4, ease: "elastic" }); // upping x

    gsap.to(cube.scale, {
      x: 1,
      y: 1,
      duration: 2,
      ease: "elastic",
      onComplete: callAnimation,
    }); //transforming y
  }

  callAnimation();

  const animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.y += 0.005;

    renderer.render(scene, camera);
  };

  animate();
};
