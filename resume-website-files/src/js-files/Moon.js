import React, { useState, useEffect, useRef } from "react";
import { useLoader, useFrame, extend } from "@react-three/fiber";
import '../css-files/Moon.css';
// import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import MoonTextureMap from '../other-files/8k_lunar_surface.jpg';
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

// import React, { Suspense, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';


// import React, { useEffect } from 'react';
// import { useThree } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';

import * as THREE from 'three';

const Moon = () => {
    const mesh = useRef();
    const { camera, size } = useThree();

    const [moonMap] = useLoader(TextureLoader, [MoonTextureMap]);

    useEffect(() => {
        const handleResize = () => {
            const scaleFactor = size.width / 300; // Adjust this factor based on your desired scaling
            const newRadius = 1 * scaleFactor; // Initial radius is 1
            mesh.current.geometry.dispose(); // Dispose the existing geometry to create a new one
            mesh.current.geometry = new THREE.SphereGeometry(newRadius, 32, 32); // Create a new sphere geometry with updated radius
        
            camera.aspect = size.width / size.height; // Update the aspect ratio
            camera.updateProjectionMatrix(); // Apply the changes to the camera
        };

        handleResize(); // Initial setup

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [camera, size]);

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.001;
        }
    });

    return (
        <>
        <ambientLight intensity={0.03} />
        <pointLight color="#FFFFFF" position={[1.5, -1, 3]} intensity={0.5} />
        <mesh ref={mesh} scale={[.9, .9, .9]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={moonMap} metalness={0.1} roughness={0.7} />
            <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
            />
        </mesh>
        </>
    );
};

export default Moon;


// const Moon = () => {
    // const [moonMap] = useLoader(TextureLoader, [MoonTextureMap]);
    // const moonRef = useRef();

    // return (
    //     <div className="moon__parent">
    //         <Canvas>
    //             <Suspense fallback={null}>
    //                 <ambientLight intensity={.12} />
    //                 <pointLight color="#FFFFFF" position={[1.5, -1, 3.5]} intensity={4} />
    //                 <MoonModel moonRef={moonRef} moonMap={moonMap} />
    //             </Suspense>
    //         </Canvas>
    //     </div>
    // );
// };

// const MoonModel = ({ moonRef, moonMap }) => {
//     useFrame(() => {
//         if (moonRef.current) {
//             moonRef.current.rotation.y += 0.001;
//         }
//     });

//     return (
//         <mesh ref={moonRef} scale={[2.7,2.7,2.7]}>
//             <sphereGeometry args={[1, 32, 32]} />
//             <meshStandardMaterial map={moonMap} metalness={.1} roughness={.7} />
//             <OrbitControls
//                 enableZoom={false}
//                 enablePan={true}
//                 enableRotate={true}
//                 zoomSpeed={0.6}
//                 panSpeed={0.5}
//                 rotateSpeed={0.4}
//             />
//         </mesh>
//     );
// };

// export default Moon;
