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
    const mainTextTitleParentRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);

    const handleResize = () => {
        if (mainTextTitleParentRef.current) {
        setDivWidth(mainTextTitleParentRef.current.clientWidth);
        }
    };

    useEffect(() => {
        if (mainTextTitleParentRef.current) {
        setDivWidth(mainTextTitleParentRef.current.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [mainTextTitleParentRef]);
  
    // const calculateTitleFontSize = () => {
    //     const minFontSize = 30;
    //     const maxFontSize = 150;
    //     const minContainerWidth = 750;
      
    //     // Adjust the scaleFactor based on your requirements
    //     const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5; // Using 750 as the reference width
      
    //     const fontSize = 30 * scaleFactor; // Assuming the initial font size is 30px
      
    //     return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
    //   };
      
    //   const calculateSubtitleFontSize = () => {
    //     const minFontSize = 10;
    //     const maxFontSize = 50;
    //     const minContainerWidth = 750;
      
    //     // Adjust the scaleFactor based on your requirements
    //     const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5; // Using 750 as the reference width
      
    //     const fontSize = 10 * scaleFactor; // Assuming the initial font size is 10px
      
    //     return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
    //   };

      const calculateFontSize = (minFontSize, maxFontSize) => {
        const minContainerWidth = 750;
      
        // Adjust the scaleFactor based on your requirements
        const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5; // Using 750 as the reference width
      
        const fontSize = minFontSize * scaleFactor; // Assuming the initial font size is 10px
      
        return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
      };
  
    return (
        <div className="MainTextTitleParent" id="Home" ref={mainTextTitleParentRef}>
            <div className='MainTextTitleLeft'>
            <div className='MainTextTitle MainTextAnimation' style={{ fontSize: calculateFontSize(30, 150) }}>
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span className='MainTextTitleUnderscore'>_</span>
            </div>
            <div className='MainTextSubtitle MainTextAnimation' style={{ fontSize: calculateFontSize(10, 50) }}>
                <span>I</span>
                <span>'</span>
                <span>m</span>
                <span>&nbsp;</span>
                <span>A</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
            </div>
            </div>
            <div className='MainTextTitleRight'>
                <Canvas>
                    <Suspense fallback={null}>
                    <Moon />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
  };
  
  export default Title;

// const Title = () => {
//     return (
//         <div className= 'MainTextTitleParent' id="Home">
//             <div className='MainTextTitleLeft'>
//                 <div className='MainTextTitle MainTextAnimation'>
//                     <span>H</span>
//                     <span>e</span>
//                     <span>l</span>
//                     <span>l</span>
//                     <span>o</span>
//                     <span className='MainTextTitleUnderscore'>_</span>
//                     {/* Hello. */}
//                 </div>
//                 <div className='MainTextSubtitle MainTextAnimation'>
//                     <span>I</span>
//                     <span>'</span>
//                     <span>m</span>
//                     <span>&nbsp;</span>
//                     <span>A</span>
//                     <span>n</span>
//                     <span>n</span>
//                     <span>e</span>
//                     {/* I'm Anne */}
//                 </div>
//             </div>
//             <div className= 'MainTextTitleRight'>
//                 <Canvas>
//                     <Suspense fallback={null}>
//                         <Moon/>
//                     </Suspense>
//                 </Canvas>
//             </div>
//         </div>
//     )
// }

// export default Title;