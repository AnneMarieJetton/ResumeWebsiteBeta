import '../css-files/Education.css';

import React, { useEffect, useState } from 'react';

import UFO from '../other-files/ufo_again.png';

const Education = () => {
    return(
        <div className='MainTextEducationParent' id="Education">
            <div className='MainTextEducationTitle MainTextAnimation'>
                <span>E</span>
                <span>d</span>
                <span>u</span>
                <span>c</span>
                <span>a</span>
                <span>t</span>
                <span>i</span>
                <span>o</span>
                <span>n</span>
            </div>
            <div className='MainTextEducationBody'>
                <div className='MainTextEducationBodyRow1'>
                    <div className="UFOParent">
                        <img className="UFO" id="UFO" src={UFO} alt="UFO" />
                    </div>
                    <div className='MainTextEducationBodyText'>
                        <span className='MainTextEducationBodyTextSubtitle'>Utah State University</span>
                        <span className='MainTextEducationBodyTextSubtitle2'>Bachelor of Computer Science</span>
                        <span className='MainTextEducationBodyTextSubtitle2'>Minor In Mathematics</span>
                        <span className='MainTextEducationBodyTextSubtitle2'>Magna Cum Laude</span>
                    </div>
                    <div className="UFOParent">
                        <img className="UFO2" id="UFO2" src={UFO} alt="UFO" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;