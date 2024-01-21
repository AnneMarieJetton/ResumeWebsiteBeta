import React, { useState, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import '../css-files/Moon.css';
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import MoonTextureMap from '../other-files/8k_lunar_surface.jpg';
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const Moon = () => {
    const [moonMap] = useLoader(TextureLoader, [MoonTextureMap]);
    const moonRef = useRef();

    return (
        <div className="moon__parent">
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={.12} />
                    <pointLight color="#FFFFFF" position={[1.5, -1, 3.5]} intensity={4} />
                    <MoonModel moonRef={moonRef} moonMap={moonMap} />
                </Suspense>
            </Canvas>
        </div>
    );
};

const MoonModel = ({ moonRef, moonMap }) => {
    useFrame(() => {
        if (moonRef.current) {
            moonRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={moonRef} scale={[2.7,2.7,2.7]}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial map={moonMap} metalness={.1} roughness={.7} />
            <OrbitControls
                enableZoom={false}
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4}
            />
        </mesh>
    );
};

export default Moon;
