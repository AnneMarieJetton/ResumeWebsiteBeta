//-------Files-----------
import '../css-files/Moon.css';

//-------Resources-------
import MoonTextureMap from '../other-files/8k_lunar_surface.jpg';

//-------Other-----------
import React, {useEffect, useRef } from "react";
import { useLoader, useFrame} from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls} from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';


//About section of the webpage
const Moon = () => {
    

    //-------Const Variables------

    const mesh = useRef();
    const { camera, size } = useThree();
    const [moonMap] = useLoader(TextureLoader, [MoonTextureMap]);

    
    //-------UseEffect--------

    //UseEffect for resizing
    useEffect(() => {
        const handleResize = () => {
            const scaleFactor = size.width / 300;
            const newRadius = 1 * scaleFactor;
            mesh.current.geometry.dispose();
            mesh.current.geometry = new THREE.SphereGeometry(newRadius, 32, 32);
        
            camera.aspect = size.width / size.height;
            camera.updateProjectionMatrix();
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [camera, size]);

    //UseFrame for rotation
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.001;
        }
    });


    //----------Content--------

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


//----------Export----------

export default Moon;
