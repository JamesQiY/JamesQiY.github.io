'use strict';
import React, { Component } from "react";
import * as THREE from 'three';
import PropTypes from 'prop-types';

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dark: props.dark,
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
      for (const listen in this.listeners){
        window.removeEventListener(listen, this.listeners[listen]);
      }
    } catch (error) {
      console.log(error);
    }
  }
  // width={this.state.x} height={this.state.y}
  render() {
    const canvas = <canvas id="bg" className="absolute -z-10 opacity-90" ></canvas>;
    return (
      canvas
    )
  }

  background_init() {
    let sizeX = this.state.x;
    let sizeY = this.state.y;
    let darkMode = this.state.dark;
    // colors 
    const color = darkMode ? 'white' : 'black';
    const bg_color = darkMode ? 0x212121 : 0xffffff;

    // scene
    const scene = new THREE.Scene();
    var canvas = document.querySelector('canvas');

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
    const starsNum = 5000;
    const posArray = new Float32Array(starsNum * 3);

    for (let i = 0; i < starsNum * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 4;
    }
    stars.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // materials
    const starMaterial = new THREE.PointsMaterial({
      color: color,
      size: 0.00125,
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
      // camera.aspect = sizeX / sizeY;
      camera.updateProjectionMatrix()
    }

    // animation
    const clock = new THREE.Clock();
    const animate = () => {
      const time = Math.log(clock.getElapsedTime() + 10) * 0.5 + 5;

      starMesh.rotation.y = time;
      starMesh.rotation.x = time;

      if (mouseX > 0) {
        starMesh.rotation.x = (mouseX / sizeX) * 0.5 * (time);
        starMesh.rotation.y = (mouseY / sizeY) * 0.5 * (time);
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate)
    }
    animate();
    return {'mousemove': mouseStars, 'resize': resize}
  }
}

Background.propTypes = {
  dark: PropTypes.bool
}

export default Background;