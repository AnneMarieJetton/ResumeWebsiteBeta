import '../css-files/Title.css';

// import React, { useEffect, useState } from 'react';
import Moon from './Moon';

import React, { useState, useEffect, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import '../css-files/Moon.css';
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import MoonTextureMap from '../other-files/8k_lunar_surface.jpg';
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

const Title = () => {
    return (
        <div className= 'MainTextTitleParent' id="Home">
            <div className='MainTextTitleLeft'>
                <div className='MainTextTitle MainTextAnimation'>
                    <span>H</span>
                    <span>e</span>
                    <span>l</span>
                    <span>l</span>
                    <span>o</span>
                    <span className='MainTextTitleUnderscore'>_</span>
                    {/* Hello. */}
                </div>
                <div className='MainTextSubtitle MainTextAnimation'>
                    <span>I</span>
                    <span>'</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>A</span>
                    <span>n</span>
                    <span>n</span>
                    <span>e</span>
                    {/* I'm Anne */}
                </div>
            </div>
            <div className= 'MainTextTitleRight'>
                <Canvas>
                    <Suspense fallback={null}>
                        <Moon/>
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

export default Title;