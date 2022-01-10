import React, {
  useState,
  useEffect,
  useRef,
  useContext,
} from "react";
import { PageContext } from "../hooks/pageContext";
import * as THREE from "three";

const Background = () => {
  const pagectx = useContext(PageContext);
  const canvasRef = useRef(null);
  const isMounted = useRef(false);

  const [meshState, setmeshState] = useState(null);
  const [rendererState, setrendererState] = useState(null);
  const [sceneState, setsceneState] = useState(null);
  const [cameraState, setcameraState] = useState(null);

  function startAnimation() {
    let renderer = rendererState;
    let mouseX = 0, mouseY = 0;
    let mouse = document.addEventListener("mousemove", mouseStars);

    function mouseStars(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    const clock = new THREE.Clock();
    const animate = () => {
      const speed = 0.3;
      meshState.rotation.y = speed * clock.getElapsedTime();
      meshState.rotation.x = speed * clock.getElapsedTime();

      if (mouseX > 0) {
        meshState.rotation.x += mouseX * 0.01 * 0.075;
        meshState.rotation.y += mouseY * 0.01 * 0.075;
      }
      renderer.render(sceneState, cameraState);
      window.requestAnimationFrame(animate);
    };
    animate();
    return mouse;
  }

  function init() {
    //init
    const bg_color = pagectx.darkTheme ? 0x212121 : 0xffffff;

    // scene
    const scene = new THREE.Scene();
    let canvas = document.querySelector("canvas");
    let sizeX = pagectx.width;
    let sizeY = pagectx.height;

    // camera
    const camera = new THREE.PerspectiveCamera(75, sizeX / sizeY, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera);

    // render
    let renderer = new THREE.WebGLRenderer({
      canvas: canvas,
    });
    renderer.setSize(sizeX, sizeY);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(bg_color);

    // lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1, 100);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // geometry objects
    let stars = new THREE.BufferGeometry();
    const starsNum = 6000;
    const posArray = [];
    const colArray = [];
    const color = new THREE.Color();

    for (let i = 0; i < starsNum; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      const vx = Math.random();
      const vy = Math.random() * x;
      const vz = Math.random();

      color.setRGB(vx, vy, vz);

      posArray.push(x, y, z);
      colArray.push(color.r, color.g, color.b);
    }
    stars.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(posArray, 3)
    );
    stars.setAttribute("color", new THREE.Float32BufferAttribute(colArray, 3));
    stars.computeBoundingSphere();

    // materials
    const starMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.0075,
    });
    const starMesh = new THREE.Points(stars, starMaterial);
    scene.add(starMesh);

    setmeshState(starMesh);
    setrendererState(renderer);
    setsceneState(scene);
    setcameraState(camera);
  }

  useEffect(() => {
    let handler = null;
    if (isMounted.current) {
      canvasRef.current.width = pagectx.width;
      canvasRef.current.height = pagectx.height;

      rendererState.setSize(pagectx.width, pagectx.height);
      rendererState.setClearColor(pagectx.darkTheme ? 0x212121 : 0xffffff);
      cameraState.aspect = pagectx.width / pagectx.height;
      cameraState.updateProjectionMatrix();
      handler = startAnimation();
    }

    return () => {
      if (isMounted.current) {
        window.removeEventListener("mousemove", handler);
      }
    };
  }, [pagectx.darkTheme, pagectx.width, pagectx.height, isMounted.current]);

  useEffect(() => {
    if (!isMounted.current) {
      init();
      isMounted.current = true;
    }
    return () => {
      
    };
  }, []);

  return (
    <canvas
      id="bg"
      className="absolute p-0 m-0 -z-10 overflow-hidden"
      ref={canvasRef}
    ></canvas>
  );
};

export default Background;
