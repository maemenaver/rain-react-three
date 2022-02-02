import 'aframe'
import * as THREE from "three"
import {
  Scene,
  Box,
  Sphere,
  Cylinder,
  Plane,
  Sky,
  Camera,
  Light,
  Assets,
  Entity
} from '@belivvr/aframe-react';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sceneEl = document.querySelector('a-scene')
    const sceneThree = sceneEl.object3D

    const cameraEl = document.querySelector('a-camera')
    cameraEl.object3D.rotation.set(1.16, -0.12, 0.27)
    // cameraEl.setAttribute("rotation", { x: 1.16, y: -0.12, z: 0.27 })
    // cameraEl.setAttribute("position", { x: 0, y: 500, z: 1 })
    // cameraEl.object3D.rotation.x = THREE.Math.degToRad(45);
    // cameraEl.object3D.rotation.y = THREE.Math.degToRad(45);
    // cameraEl.object3D.rotation.z = THREE.Math.degToRad(45);
    console.log(cameraEl.object3D)

    for (let p = 0; p < 25; p++) {
      let cloud = document.createElement('a-entity');
      cloud.setAttribute('geometry', {
        primitive: "plane",
        width: 500,
        height: 500,
      })
      // cloud.setAttribute('material', {
      //   src: "#smoke",
      //   transparent: true,
      //   opacity: 0.6
      // })
      cloud.setAttribute('position', {
        x: Math.random() * 800 - 400,
        y: 500,
        z: Math.random() * 500 - 450
      })
      cloud.setAttribute('rotation', {
        x: 1.16,
        y: -0.12,
        z: Math.random() * 360
      })
      cloud.object3D.position.set(Math.random() * 800 - 400,
        500,
        Math.random() * 500 - 450)
      sceneEl.appendChild(cloud)
      console.log(cloud.object3D)
    }
  }, []);


  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Scene background={{ color: "#11111f" }} fog={{ color: "#11111f", density: 0.002, type: "exponential" }}>
        <a-assets>
          <img id="smoke" src="smoke.png" />
        </a-assets>
        <a-camera />
        <Light type={"ambient"} color='#555555' />
        <Light type={"directional"} position={{ x: 0, y: 0, z: 1 }} color='#ffeedd' />
        {/* <Plane width={500} height={500} material={{ src: "#smoke", transparent: true }} /> */}
        {/* <Sky color='#FFFFFF' /> */}
      </Scene>
    </div>
  );
}

export default App;
