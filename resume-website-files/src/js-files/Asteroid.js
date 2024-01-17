
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import '../css-files/Asteroid.css';
import Asteroidgltf from '../other-files/54509-yorp_asteroid_potential_earth_impactor.glb'

import React, { useState, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import '../css-files/Moon.css';
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { TextureLoader } from "three";
import { useGLTF, Stage} from "@react-three/drei";
import { PresentationControls } from "@react-three/drei";
import { OrbitControls, Stars } from "@react-three/drei";

const Asteroid = ({ size, placementX, placementY }) => {
  const asteroidRef1 = useRef();
  const asteroidRef2 = useRef();

  const gltfLoader = new GLTFLoader();
  const [gltf1, setGltf1] = useState(null);
  const [gltf2, setGltf2] = useState(null);

  const onLoadModel1 = (gltf) => {
    setGltf1(gltf);
  };

  const onLoadModel2 = (gltf) => {
    setGltf2(gltf);
  };

  return (
    <div>
      <div style={{ position: 'absolute', top: `${placementY}%`, right: `${placementX - 20}%` }}>
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight color="#FFFFFF" position={[5, 5, 5]} intensity={1} />
            {gltf1 && (
              <primitive object={gltf1.scene} ref={asteroidRef1} scale={[size, size, size]} />
            )}
            {gltf2 && (
              <primitive object={gltf2.scene} ref={asteroidRef2} scale={[size, size, size]} />
            )}
            <OrbitControls enableZoom={false} />
          </Suspense>
        </Canvas>
      </div>

      {/* Load models */}
      <Suspense fallback={null}>
        <primitive object={gltfLoader.load(Asteroidgltf, onLoadModel1)} />
        <primitive object={gltfLoader.load(Asteroidgltf, onLoadModel2)} />
      </Suspense>
    </div>
  );
};

export default Asteroid;

// const Asteroid = ({ size, startingAngle, placementX, placementY }) => {
//     const asteroidRef = useRef();
//     const gltf = useLoader(GLTFLoader, Asteroidgltf);

//     const asteroidCoordinates = {
//         top: `${placementY}%`,
//         right: `${placementX}%`,
//     };
  
//     return (
//       <div className='asteroid__parent' style={asteroidCoordinates}>
//         <Canvas>
//           <Suspense fallback={null}>
//             <ambientLight intensity={0.12} />
//             <pointLight color="#FFFFFF" position={[1.5, -1, 3.5]} intensity={10} />
//             {/* <AsteroidModel asteroidRef={asteroidRef} size={size} startingAngle={startingAngle}/> */}
//               <primitive object={gltf.scene} ref={asteroidRef} rotation={[startingAngle, startingAngle, startingAngle]} />
//           </Suspense>
//         </Canvas>
//       </div>
//     );
//   };

//   export default Asteroid;



//   const AsteroidModel = ({ asteroidRef, size, startingAngle }) => {
//     const gltf = useLoader(GLTFLoader, Asteroidgltf);

//     useFrame(() => {
//         if (asteroidRef.current) {
//             asteroidRef.current.rotation.y += 0.001;
//         }
//     });

//     return (
//         <mesh ref={asteroidRef} scale={[size,size,size]}>
//             <primitive object={gltf.scene} ref={asteroidRef} rotation={[startingAngle, startingAngle, startingAngle]} />
//             {/* <OrbitControls
//                 enableZoom={false}
//                 enablePan={true}
//                 enableRotate={true}
//                 zoomSpeed={0.6}
//                 panSpeed={0.5}
//                 rotateSpeed={0.4}
//             /> */}
//         </mesh>
//     );
// };
  
  // export default Asteroid;