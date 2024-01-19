import '../css-files/Skills.css';

import React, { useEffect, useState } from 'react';
import Astronaught from '../other-files/true_astronaught_2_transparent.png';

const Skills = () => {
    return (
        <div className= 'MainTextSkillsParent' id="Skills">
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
                <div className='MainTextSkillsBodyLeft'>
                    <span className='MainTextLanguagesSubtitle' style={{ left: '36%' }}>Languages</span>
                    <span style={{ left: '13.33%', top: '10%' }}>Java</span>
                    <span style={{ left: '33.33%', top: '25%' }}>Python</span>
                    <span style={{ left: '83.33%', top: '40%' }}>C</span>
                    <span style={{ left: '63.33%', top: '55%' }}>C++</span>
                    <span style={{ left: '23.33%', top: '70%' }}>JavaScript</span>
                    <span style={{ left: '73.33%', top: '85%' }}>CSS</span>
                    <span style={{ left: '13.33%', top: '100%' }}>HTML</span>
                </div>
                <div className="AstronaughtParent">
                    <img className="Astronaught" src={Astronaught} alt="astronaught" />
                </div>
                <div className='MainTextSkillsBodyRight'>
                    <span className='MainTextToolsSubtitle' style={{ left: '43%' }}>Tools</span>
                    <span style={{ left: '33.33%', top: '10%' }}>React.JS</span>
                    <span style={{ left: '63.33%', top: '18%' }}>THREE.JS</span>
                    <span style={{ left: '23.33%', top: '26%' }}>Vue</span>
                    <span style={{ left: '73.33%', top: '34%' }}>SQL</span>
                    <span style={{ left: '13.33%', top: '42%' }}>Jenkins</span>
                    <span style={{ left: '63.33%', top: '50%' }}>Artifactory</span>
                    <span style={{ left: '33.33%', top: '58%' }}>Git</span>
                    <span style={{ left: '83.33%', top: '66%' }}>JIRA</span>
                    <span style={{ left: '53.33%', top: '74%' }}>Firebase</span>
                    <span style={{ left: '73.33%', top: '82%' }}>Stripe</span>
                    <span style={{ left: '13.33%', top: '90%' }}>Pygame</span>
                    <span style={{ left: '63.33%', top: '98%' }}>Postman</span>
                    {/* adding more left causes scroll bar to appear on bottom? fix. */}
                </div>
            </div>
        </div>
    )
}

export default Skills;