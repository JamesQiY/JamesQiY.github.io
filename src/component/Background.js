import React, { Component } from "react";
import * as THREE from 'three';
import PropTypes from 'prop-types';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: props.darkTheme,
      x: window.innerWidth,
      y: window.innerHeight
    }
    this.listeners = {};
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.setState({
      x: window.innerWidth,
      y: window.innerHeight
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.listeners = this.background_init();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    try {
      for (const listen in this.listeners) {
        window.removeEventListener(listen, this.listeners[listen]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // width={this.state.x} height={this.state.y}
  render() {
    const canvas = <canvas id="bg" className="absolute top-0 left-0 -z-10 w-full h-full opacity-90" width={this.state.x} height={this.state.y} ></canvas>;
    return (canvas)
  }

  background_init() {
    let darkMode = this.state.dark;
    // colors 
    // const color = darkMode ? 'white' : 'black';
    const bg_color = darkMode ? 0x212121 : 0xffffff;

    // scene
    const scene = new THREE.Scene();
    var canvas = document.querySelector('canvas');
    let sizeX = canvas.width;
    let sizeY = canvas.height;

    // camera
    const camera = new THREE.PerspectiveCamera(75, sizeX / sizeY, 0.1, 100);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 2;
    scene.add(camera)

    // render
    var renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setSize(sizeX, sizeY);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(bg_color);

    // lights
    const pointLight = new THREE.PointLight(0xffffff, 0.1, 100)
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    // geometry objects
    var stars = new THREE.BufferGeometry();
    const starsNum = 6000;
    const posArray = [];
    const colArray = [];
    const color = new THREE.Color();

    for (let i = 0; i < starsNum; i++) {
      const x = (Math.random() - 0.5) * 8;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 8;
      const vx = Math.random() ;
      const vy = Math.random() * x;
      const vz = Math.random() ;

      color.setRGB(vx, vy, vz);

      posArray.push(x,y,z);
      colArray.push(color.r, color.g, color.b);
    }
    stars.setAttribute('position', new THREE.Float32BufferAttribute(posArray, 3));
    stars.setAttribute('color', new THREE.Float32BufferAttribute(colArray, 3));
    stars.computeBoundingSphere();

    // materials
    const starMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.005,
      // transparent: true,
    });
    const starMesh = new THREE.Points(stars, starMaterial)
    scene.add(starMesh);

    // listners
    let mouseX = 0;
    let mouseY = 0;
    document.addEventListener('mousemove', mouseStars);
    window.addEventListener('resize', resize);

    function mouseStars(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    function resize() {
      sizeX = window.innerWidth;
      sizeY = window.innerHeight;
      renderer.setSize(sizeX, sizeY);
      camera.aspect = sizeX / sizeY;
      camera.updateProjectionMatrix()
    }

    // animation
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = Math.min (clock.getElapsedTime(), 25);
      const time = 1.1 * Math.log10(elapsed + 5) + 5;

      starMesh.rotation.y = time;
      starMesh.rotation.x = time;

      if (mouseX > 0) {
        starMesh.rotation.x += (mouseX / sizeX) * 0.5 * (Math.min(0.55,time));
        starMesh.rotation.y += (mouseY / sizeY) * 0.5 * (Math.min(0.55,time));
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate)
    }
    animate();
    return { 'mousemove': mouseStars, 'resize': resize }
  }
}

Background.propTypes = {
  dark: PropTypes.bool
}

export default Background;