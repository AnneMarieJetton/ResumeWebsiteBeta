import '../css-files/MainText.css';
import React, { useEffect, useState } from 'react';

const MainText = () => {

    return(
        <div className='MainTextParent'>
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
            <div className='MainTextSkillsTitle MainTextAnimation'>
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
                {/* Skills */}
            </div>
            <div className='MainTextSkillsBody'>
                <ul>
                    <li>stuff</li>
                    <li>more stuff</li>
                    <li>even more stuff</li>
                </ul>
            </div>
            <div className='MainTextExperienceTitle MainTextAnimation'>
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                {/* Experience */}
            </div>
            <div className='MainTextExperienceBody'>
                <ul>
                    <li>stuff</li>
                    <li>more stuff</li>
                    <li>even more stuff</li>
                </ul>
            </div>
            <div className='MainTextContactTitle MainTextAnimation'>
                <span>C</span>
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>M</span>
                <span>e</span>
                {/* Contact Me */}
            </div>
            <div className='MainTextContactBody'>
                <ul>
                    <li>stuff</li>
                    <li>more stuff</li>
                    <li>even more stuff</li>
                </ul>
            </div>
        </div>
    )

}

export default MainText;
