import React, { Component } from "react";
import * as THREE from 'three';
import PropTypes from 'prop-types';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: props.darkTheme,
      statex: this.props.width,
      statey: this.props.height,
    }
    this.listeners = {};
    this.starBG = {}; //render object
    this.handleResize = this.handleResize.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }

  handleResize() {
    this.x = this.props.width;
    this.y = this.props.height;
  }

  componentDidUpdate(){
    this.starBG.renderer.setSize(this.props.width, this.props.height)
    this.starBG.camera.aspect = this.props.width / this.props.height;
    this.starBG.camera.updateProjectionMatrix()
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    this.background_init();
    this.listeners = this.startAnimation();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    try {
        window.removeEventListener('mousemove', this.listeners);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const canvas = <canvas id="bg" className="absolute p-0 m-0 -z-10 opacity-90 overflow-hidden" width={this.props.width} height={this.props.height} ></canvas>;
    return (canvas)
  }

  background_init() {
    let darkMode = this.state.dark;
    // colors 
    const bg_color = darkMode ? 0x212121 : 0xffffff;

    // scene
    const scene = new THREE.Scene();
    var canvas = document.querySelector('canvas');
    let sizeX = this.x;
    let sizeY = this.y;

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
      size: 0.0075,
      // transparent: true,
    });
    const starMesh = new THREE.Points(stars, starMaterial)
    scene.add(starMesh);

    this.starBG.mesh = starMesh;
    this.starBG.renderer = renderer;
    this.starBG.scene = scene;
    this.starBG.camera = camera;
  }

  startAnimation(){
    var renderer = this.starBG.renderer
    let mouseX = 0;
    let mouseY = 0;
    let mouse = document.addEventListener('mousemove', mouseStars);

    function mouseStars(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    }

    // function resize() {
      
    // }
    const clock = new THREE.Clock();
    const animate = () => {
      const speed = 0.3;
      this.starBG.mesh.rotation.y = speed * clock.getElapsedTime();
      this.starBG.mesh.rotation.x = speed * clock.getElapsedTime();

      // this.starBG.mesh.rotation.y = speed * (Math.sin(clock.getElapsedTime()) + 2);
      // this.starBG.mesh.rotation.x = speed * (Math.sin(clock.getElapsedTime()) + 2);

      if (mouseX > 0) {
        this.starBG.mesh.rotation.x += (mouseX * 0.01) * 0.075;
        this.starBG.mesh.rotation.y += (mouseY * 0.01) * 0.075;
      }
      renderer.render(this.starBG.scene, this.starBG.camera);
      window.requestAnimationFrame(animate)
    }
    animate();
    return mouse;
  }
}

Background.propTypes = {
  dark: PropTypes.bool
}

export default Background;