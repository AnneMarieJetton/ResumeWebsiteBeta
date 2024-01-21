import '../css-files/MainText.css';

import Title from './Title';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

import React, { useEffect, useState } from 'react';

const MainText = () => {

    return(
        <div className='MainTextParent'>
            <Title/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Education/>
            <Contact/>
        </div>
    )

}

export default MainText;
