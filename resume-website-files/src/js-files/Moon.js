import React, { useState, useEffect } from "react";
import '../css-files/Moon.css';
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";

const Moon = () => {

    return (
        <div className="moon__parent">
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={1} />
                    <mesh>
                        <sphereGeometry args={[1, 32, 32]} />
                        <meshPhongMaterial color="red" />
                    </mesh>
                </Suspense>
            </Canvas>
        </div>
    )

};

export default Moon;