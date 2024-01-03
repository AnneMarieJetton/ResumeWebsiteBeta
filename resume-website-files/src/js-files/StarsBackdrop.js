import React, { useState, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import '../css-files/StarsBackdrop.css';
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import MoonTextureMap from '../other-files/8k_lunar_surface.jpg';
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const StarsBackdrop = () => {
    // const [moonMap] = useLoader(TextureLoader, [MoonTextureMap]);
    // const moonRef = useRef();

    return (
        <div className="Stars__Parent">
            <Canvas>
                <Suspense fallback={null}>
                    <Stars
                        radius={300}
                        depth={60}
                        count={20000}
                        factor={7}
                        saturation={0}
                        fade={true}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarsBackdrop;