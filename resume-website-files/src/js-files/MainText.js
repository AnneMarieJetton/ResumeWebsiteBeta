import '../css-files/MainText.css';
import React, { useEffect, useState } from 'react';
import Moon from './Moon';
import Asteroid from './Asteroid';

const MainText = () => {

    return(
        <div className='MainTextParent'>

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
                <Moon/>
            </div>

            <div className= 'MainTextAboutParent' id="About">
                <div className='MainTextAboutTitle MainTextAnimation'>
                    <span>A</span>
                    <span>b</span>
                    <span>o</span>
                    <span>u</span>
                    <span>t</span>
                    {/* Skills */}
                </div>
                <div className='MainTextAboutBody'>
                    {/* <ul>
                        <li>stuff</li>
                        <li>more stuff</li>
                        <li>even more stuff</li>
                    </ul> */}
                    Hey there! Im a software developer born and raised in Orlando, Florida. My Hobbies include Painting, Hiking, and BLANK.<br /><br />
                    I am also a cat enthusiest, owning a mischevious and sporatic cat named Sir Arthur.<br /><br /> 
                    My most recent personal coding project, and the one I am most excited about, is BLANK (link found below), where I discover <br />the best and most efficient ways to annoy a user.<br />
                </div>
                {/* <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={45}/> */}
            </div>

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
                        <span className='MainTextLanguagesSubtitle'>Languages</span>
                        <ul className='MainTextSkillsBodyList'>
                            <li>Java</li>
                            <li>Python</li>
                            <li>C</li>
                            <li>C++</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </div>
                    <div className='MainTextSkillsBodyRight'>
                        <span className='MainTextToolsSubtitle'>Tools</span>
                        <ul className='MainTextSkillsBodyList'>
                            <li>React.JS</li>
                            <li>THREE.JS</li>
                            <li>Vue</li>
                            <li>SQL</li>
                            <li>Jenkins</li>
                            <li>Artifactory</li>
                            <li>Git</li>
                            <li>JIRA</li>
                            <li>Firebase</li>
                            <li>Stripe</li>
                            <li>Pygame</li>
                            <li>Postman</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className= 'MainTextExperienceParent' id="Experience">
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
                    <div className='MainTextExperienceBodySection1'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>company name</span>
                            <span className='MainTextExperienceBodyDate'>Date</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>job title<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>description<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>stuff</li>
                            <li>more stuff</li>
                            <li>even more stuff</li>
                        </ul>
                    </div>
                    <div className='MainTextExperienceBodySection2'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>company name</span>
                            <span className='MainTextExperienceBodyDate'>Date</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>job title<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>description<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>stuff</li>
                            <li>more stuff</li>
                            <li>even more stuff</li>
                        </ul>
                    </div>
                    <div className='MainTextExperienceBodySection3'>
                        <div className='MainTextExperienceBodyTitles'>
                            <span className='MainTextExperienceBodyCompanyName'>company name</span>
                            <span className='MainTextExperienceBodyDate'>Date</span>
                        </div>
                        <span className='MainTextExperienceBodyJobTitle'>job title<br /></span>
                        <span className='MainTextExperienceBodyJobDescription'>description<br /><br /></span>
                        <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                        <ul className='MainTextExperienceBodyRespAndAcomList'>
                            <li>stuff</li>
                            <li>more stuff</li>
                            <li>even more stuff</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className= 'MainTextContactParent' id="Contact">
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
            <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/>
            <Asteroid size={0.5} startingAngle={Math.PI / 4} placementX={30} placementY={145}/>
        </div>
    )

}

export default MainText;
