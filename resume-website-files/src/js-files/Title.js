import '../css-files/Title.css';

import React, { useEffect, useState } from 'react';
import Moon from './Moon';

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
                <Moon/>
            </div>
            {/* <Moon/> */}
        </div>
    )
}

export default Title;